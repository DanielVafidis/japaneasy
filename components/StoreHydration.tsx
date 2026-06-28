"use client";

import { useEffect } from "react";
import { useStore } from "@/lib/store";

/**
 * Persisted zustand store uses `skipHydration` to avoid SSR mismatches.
 * This component rehydrates it once, on the client, after mount.
 */
export function StoreHydration() {
  useEffect(() => {
    void useStore.persist.rehydrate();
  }, []);
  return null;
}
