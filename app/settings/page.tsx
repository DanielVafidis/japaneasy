import type { Metadata } from "next";
import { SettingsView } from "@/components/settings/SettingsView";

export const metadata: Metadata = {
  title: "Settings",
  description:
    "Reading preferences, daily goal, theme, and your local data backup.",
};

export default function SettingsPage() {
  return (
    <div className="mx-auto w-full max-w-2xl px-5 py-12 sm:py-16">
      <header className="mb-10">
        <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-shu">
          Settings · 設定
        </p>
        <h1 className="text-balance text-4xl text-ink sm:text-5xl">
          Make it yours
        </h1>
      </header>
      <SettingsView />
    </div>
  );
}
