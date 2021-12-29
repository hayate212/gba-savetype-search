import React from "react";
import { SoftwareCard, SoftwareFilter, useSoftwareManager } from ".";
import { GBASoftware } from "../../types";

export const SoftwareList: React.FC<{ softwareList: GBASoftware[] }> =
  React.memo(({ softwareList }) => {
    const { list, saveTypeList, search } = useSoftwareManager(softwareList);

    return (
      <div className="container mx-auto">
        <SoftwareFilter saveTypeList={saveTypeList} search={search} />
        <ul className="flex flex-col">
          {list.map((software, i) => (
            <SoftwareCard software={software} key={i} />
          ))}
        </ul>
      </div>
    );
  });
SoftwareList.displayName = "SoftwareList";
