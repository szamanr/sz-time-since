"use client";

import { pick } from "lodash";
import React from "react";
import { useLocalstorageState } from "rooks";
import { format, formatDuration, intervalToDuration } from "date-fns";

type Props = {};

export const TimeSince: React.FC<Props> = ({}) => {
  // TODO: remove initial
  const [dateSince] = useLocalstorageState<string>("dateSince", "2024-01-13");

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
      <span>It's been </span>
      <strong>{dateDiff}</strong>
      <span> since {format(dateSince, "dd MMM yyyy")}</span>
    </p>
  );
};
