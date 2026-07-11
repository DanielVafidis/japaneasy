/**
 * Lets `node` run this repo's TypeScript directly (native type stripping)
 * by resolving what Node's ESM loader can't: the tsconfig `@/` alias and
 * extensionless relative imports.
 *
 *   node --import ./scripts/ts-alias-loader.mjs scripts/<script>.ts
 */

import { readFileSync, statSync } from "node:fs";
import { registerHooks } from "node:module";
import { fileURLToPath } from "node:url";

const root = new URL("../", import.meta.url);

function isFile(href) {
  try {
    return statSync(fileURLToPath(new URL(href))).isFile();
  } catch {
    return false;
  }
}

function resolveTs(base) {
  const candidates = [base.href, `${base.href}.ts`, `${base.href}.tsx`, `${base.href}/index.ts`];
  return candidates.find(isFile) ?? null;
}

registerHooks({
  resolve(specifier, context, nextResolve) {
    if (context.parentURL?.includes("/node_modules/")) {
      return nextResolve(specifier, context);
    }
    let base = null;
    if (specifier.startsWith("@/")) {
      base = new URL(specifier.slice(2), root);
    } else if (specifier.startsWith("./") || specifier.startsWith("../")) {
      base = new URL(specifier, context.parentURL);
    }
    const resolved = base && resolveTs(base);
    if (resolved) return { url: resolved, shortCircuit: true };
    return nextResolve(specifier, context);
  },
  // Declare repo .ts files as TypeScript ESM up front — skips Node's
  // format detection (and its MODULE_TYPELESS_PACKAGE_JSON warning).
  load(url, context, nextLoad) {
    if (
      url.startsWith(root.href) &&
      !url.includes("/node_modules/") &&
      url.endsWith(".ts")
    ) {
      return {
        source: readFileSync(fileURLToPath(new URL(url))),
        format: "module-typescript",
        shortCircuit: true,
      };
    }
    return nextLoad(url, context);
  },
});
