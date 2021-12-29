import React, { useMemo } from "react";
import { GBASoftware } from "../../types";

export const SoftwareCard: React.FC<{ software: GBASoftware }> = React.memo(
  ({ software }) => {
    const { year, description, info, cart } = software;
    const title = useMemo(
      () => info?.["alt_title"] ?? description,
      [description, info]
    );
    const saveType = useMemo(() => cart.features.slot, [cart]);
    const isSaveTypeUnknown = useMemo(() => saveType === "UNKNOWN", [saveType]);

    return (
      <li className="bg-gray-700 mb-4 px-20 py-10 text-gray-100">
        <div className="year text-sm">{year}</div>
        <div className="title text-lg font-bold">{title}</div>
        <div className="text-sm">
          <span className="">SaveType:</span>
          <span
            className={`${
              isSaveTypeUnknown ? "text-red-600" : "text-green-500"
            } ml-1 font-bold`}
          >
            {saveType}
          </span>
        </div>
        <div className="mt-4 text-sm">{description}</div>
      </li>
    );
  }
);
SoftwareCard.displayName = "SoftwareCard";
