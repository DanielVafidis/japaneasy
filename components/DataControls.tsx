"use client";

import { useRef, useState } from "react";
import { Download, RotateCcw, Sparkles, Upload } from "lucide-react";
import { useStore } from "@/lib/store";
import { todayStr } from "@/lib/datetime";
import { Button } from "@/components/ui/Button";

export function DataControls() {
  const exportProgress = useStore((s) => s.exportProgress);
  const importProgress = useStore((s) => s.importProgress);
  const resetAll = useStore((s) => s.resetAll);

  const fileRef = useRef<HTMLInputElement | null>(null);
  const [msg, setMsg] = useState<string | null>(null);

  function doExport() {
    const data = exportProgress();
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: "application/json",
    });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `japaneasy-progress-${todayStr()}.json`;
    a.click();
    URL.revokeObjectURL(url);
    setMsg("Progress exported.");
  }

  function onImportFile(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const data = JSON.parse(String(reader.result));
        const ok = importProgress(data);
        setMsg(ok ? "Progress imported successfully." : "Import failed — unexpected file.");
      } catch {
        setMsg("Could not read that file — is it valid JSON?");
      }
    };
    reader.readAsText(file);
    e.target.value = "";
  }

  function doReset() {
    if (
      window.confirm(
        "Reset all progress? This clears your streak, XP, completed lessons and flashcards on this device. This cannot be undone.",
      )
    ) {
      resetAll();
      setMsg("Progress reset.");
    }
  }

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        <Button variant="outline" size="sm" onClick={doExport}>
          <Download className="h-4 w-4" /> Export backup
        </Button>
        <Button variant="outline" size="sm" onClick={() => fileRef.current?.click()}>
          <Upload className="h-4 w-4" /> Import backup
        </Button>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          onChange={onImportFile}
          className="hidden"
        />
        <Button
          variant="ghost"
          size="sm"
          onClick={doReset}
          className="text-shu hover:bg-shu/10"
        >
          <RotateCcw className="h-4 w-4" /> Reset
        </Button>
      </div>
      {msg && (
        <p className="mt-3 flex items-center gap-1.5 text-sm text-matcha">
          <Sparkles className="h-3.5 w-3.5" /> {msg}
        </p>
      )}
    </div>
  );
}
