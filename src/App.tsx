import { useState } from "react";
import { GBASoftware } from "./types";
import { SoftwareList } from "./components/SoftwareList";
import { softwareList as list } from "./assets/gba-software.json";

export const App = () => {
  const [softwareList] = useState<GBASoftware[]>(list);

  return (
    <div className="App bg-gray-800 w-full min-h-screen">
      <header className="bg-gray-800 w-full flex justify-end items-center px-2">
        <a
          href="https://github.com/hayate212/gba-savetype-search"
          target="_blank"
          className="text-sm text-white border-b border-white hover:text-blue-400 hover:border-blue-400"
        >
          repository
        </a>
      </header>
      <SoftwareList softwareList={softwareList} />
    </div>
  );
};

export default App;
