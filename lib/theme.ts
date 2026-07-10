"use client";

/**
 * Theme state shared by the header toggle and the settings chooser.
 * The source of truth is localStorage plus the <html> element's `dark`
 * class (set before hydration by the inline script in app/layout.tsx).
 * Components read it via useSyncExternalStore, so a change made from any
 * control stays in sync everywhere without duplicated component state.
 */

import { useSyncExternalStore } from "react";

export type ThemeMode = "light" | "dark" | "system";

const STORAGE_KEY = "japaneasy-theme";
const listeners = new Set<() => void>();

function subscribe(listener: () => void) {
  listeners.add(listener);
  return () => {
    listeners.delete(listener);
  };
}

function readMode(): ThemeMode {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark") return stored;
  } catch {}
  return "system";
}

function readDark(): boolean {
  return document.documentElement.classList.contains("dark");
}

/** Stored preference; null during server render (unknown until hydrated). */
export function useThemeMode(): ThemeMode | null {
  return useSyncExternalStore(subscribe, readMode, () => null);
}

/** Whether dark mode is active; null during server render. */
export function useIsDark(): boolean | null {
  return useSyncExternalStore(subscribe, readDark, () => null);
}

export function setThemeMode(mode: ThemeMode) {
  try {
    if (mode === "system") localStorage.removeItem(STORAGE_KEY);
    else localStorage.setItem(STORAGE_KEY, mode);
  } catch {}
  const dark =
    mode === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
      : mode === "dark";
  document.documentElement.classList.toggle("dark", dark);
  document.documentElement.style.colorScheme = dark ? "dark" : "light";
  for (const l of listeners) l();
}
