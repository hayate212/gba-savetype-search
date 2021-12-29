import React, { useCallback, useEffect, useState } from "react";
import { SearchFnType } from ".";

export const SoftwareFilter: React.FC<{
  saveTypeList: string[];
  search: SearchFnType;
}> = React.memo(({ saveTypeList, search }) => {
  const [selectedSaveType, setSelectedSaveType] = useState("ALL");
  const [inputTitle, setInputTitle] = useState("");

  const onChange = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setSelectedSaveType(e.target.value);
    },
    [setSelectedSaveType]
  );

  const onInputTitle = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputTitle(e.target.value);
    },
    [setInputTitle]
  );

  const onSearch = useCallback(() => {
    const searchParams = { saveType: selectedSaveType, title: inputTitle };
    search(searchParams);
  }, [inputTitle, selectedSaveType]);

  const onEnterKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.code === "Enter") {
        onSearch();
      }
    },
    [onSearch]
  );

  useEffect(() => {
    onSearch();
  }, [selectedSaveType]);

  return (
    <div className="py-4 px-2 flex flex-row items-center sticky top-0 bg-gray-800">
      <div>
        <span className="text-white">SaveType:</span>
        <select
          className="bg-gray-600 text-white outline-none focus:ring ml-2"
          onChange={onChange}
        >
          {saveTypeList.map((saveType) => (
            <option value={saveType} key={saveType}>
              {saveType}
            </option>
          ))}
        </select>
      </div>
      <div className="ml-2">
        <span className="text-white">Title:</span>
        <input
          type="text"
          className="ml-2 outline-none focus:ring"
          value={inputTitle}
          onChange={onInputTitle}
          onKeyDown={onEnterKeyDown}
        />
      </div>
      <button
        className="ml-4 px-2 border border-gray-400 outline-none focus:ring text-white rounded-sm"
        onClick={onSearch}
      >
        Search
      </button>
    </div>
  );
});
SoftwareFilter.displayName = "SoftwareFilter";
