"use client";
import { TimeSince } from "@/app/TimeSince";
import { PickDate } from "@/app/PickDate";
import { useEffect, useState } from "react";

export default function Home() {
  const [dateSince, setDateSince] = useState<string | null>();
  useEffect(() => {
    setDateSince(window.localStorage.getItem("dateSince"));
  }, []);

  useEffect(() => {
    if (dateSince === undefined) return;
    if (dateSince === null) {
      window.localStorage.removeItem("dateSince");
      return;
    }

    window.localStorage.setItem("dateSince", dateSince);
  }, [dateSince]);

  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <TimeSince dateSince={dateSince} />
      <PickDate dateSince={dateSince} setDateSince={setDateSince} />
    </main>
  );
}
