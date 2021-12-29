import { useCallback, useEffect, useMemo, useState } from "react";
import { GBASoftware } from "../../../types";

export type SearchFnType = (params: {
  saveType: string;
  title: string;
}) => void;

export const useSoftwareManager = (softwareList: GBASoftware[]) => {
  const [list, setList] = useState<GBASoftware[]>([]);
  const saveTypeList = useMemo<string[]>(
    () => [
      "ALL",
      ...[
        ...new Set(
          softwareList.map(
            (software) => software.cart.features.slot ?? "UNKNOWN"
          )
        ),
      ].sort(),
    ],
    [softwareList]
  );
  const search: SearchFnType = useCallback(
    ({ saveType, title }) => {
      const step1 =
        saveType === "ALL"
          ? softwareList
          : softwareList.filter(
              (software) => software.cart.features.slot === saveType
            );
      const step2 =
        title === ""
          ? step1
          : step1.filter((software) => {
              const altTitle = software.info.alt_title ?? "";
              return (
                altTitle.indexOf(title) > -1 ||
                software.description.indexOf(title) > -1
              );
            });

      setList(step2);
    },
    [softwareList, setList]
  );

  useEffect(() => {
    setList(softwareList);
  }, [softwareList]);

  return {
    list,
    originalList: softwareList,
    saveTypeList,
    search,
  };
};
