"use client";

import { useEffect, useState } from "react";
import { Clock } from "lucide-react";

/** Franja de urgencia superior, mostrando la fecha de hoy. */
export function TopBanner() {
  const [today, setToday] = useState("");

  // Se calcula en el cliente para evitar divergencia de hidratación.
  useEffect(() => {
    setToday(
      new Date().toLocaleDateString("fr-FR", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
    );
  }, []);

  return (
    <header className="w-full bg-[#e11e14] text-white text-xs sm:text-sm font-semibold shadow-md">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-1 px-4 py-2 text-center">
        <div className="inline-flex items-center gap-2 uppercase tracking-[0.18em]">
          <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white/15">
            <Clock className="h-3 w-3" />
          </span>
          <span>Offre Unique :</span>
        </div>
        <p className="text-[11px] sm:text-xs font-normal tracking-normal">
          Promotion valable uniquement aujourd'hui{today && `, ${today}`}
        </p>
      </div>
    </header>
  );
}
