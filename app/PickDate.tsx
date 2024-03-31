"use client";
import React, { useMemo } from "react";
import { useLocalstorageState } from "rooks";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import { Popover } from "@headlessui/react";

type Props = {};

export const PickDate: React.FC<Props> = ({}) => {
  const [dateSince, setDateSince] = useLocalstorageState<string | undefined>(
    "dateSince",
  );

  const selected = useMemo(
    () => (dateSince ? new Date(dateSince) : undefined),
    [dateSince],
  );
  const setSelected = (date?: Date) => {
    if (!date) {
      setDateSince(undefined);
      return;
    }

    setDateSince(format(date, "yyyy-MM-dd"));
  };

  const footer = dateSince ? (
    <p>You picked {format(dateSince, "PP")}.</p>
  ) : (
    <p>Please pick a day.</p>
  );

  return (
    <Popover className="relative">
      <Popover.Button className="w-full">Pick new date</Popover.Button>
      <Popover.Panel>
        <DayPicker
          className="rounded bg-stone-700 p-2"
          mode="single"
          selected={selected}
          onSelect={setSelected}
          footer={footer}
          toDate={new Date()}
        />
      </Popover.Panel>
    </Popover>
  );
};
