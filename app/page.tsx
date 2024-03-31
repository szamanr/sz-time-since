import { TimeSince } from "@/app/TimeSince";
import { PickDate } from "@/app/PickDate";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 space-y-8">
      <TimeSince />
      <PickDate />
    </main>
  );
}
