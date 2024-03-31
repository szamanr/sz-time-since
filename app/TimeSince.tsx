"use client";

import { pick } from "lodash";
import React from "react";
import { format, formatDuration, intervalToDuration } from "date-fns";

type Props = {
  dateSince: string | null | undefined;
};

export const TimeSince: React.FC<Props> = ({ dateSince }: Props) => {
  if (dateSince === undefined) return null;
  if (!dateSince) return <p className="text-gray-500">Please provide a date</p>;

  const dateDiff = formatDuration(
    pick(intervalToDuration({ end: new Date(), start: dateSince }), [
      "years",
      "months",
      "weeks",
      "days",
    ]),
  );

  return (
    <p>
      <span>{"It's been "}</span>
      <span>
        <strong>{dateDiff || "0 days"}</strong>
      </span>
      <span> since {format(dateSince, "dd MMM yyyy")}.</span>
    </p>
  );
};
