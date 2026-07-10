"use client";

/**
 * Current time as an external store, refreshed once a minute while any
 * component is subscribed. Due-ness checks read time through this hook so
 * render stays pure (Date.now() in render is flagged by react-hooks/purity)
 * and displayed counts refresh on their own for long-lived pages.
 */

import { useSyncExternalStore } from "react";

const REFRESH_MS = 60_000;

let now = Date.now();
const listeners = new Set<() => void>();
let timer: ReturnType<typeof setInterval> | undefined;

function subscribe(listener: () => void) {
  listeners.add(listener);
  if (listeners.size === 1) {
    now = Date.now();
    timer = setInterval(() => {
      now = Date.now();
      for (const l of listeners) l();
    }, REFRESH_MS);
  }
  return () => {
    listeners.delete(listener);
    if (listeners.size === 0) clearInterval(timer);
  };
}

export function useNow(): number {
  return useSyncExternalStore(subscribe, () => now, () => now);
}
