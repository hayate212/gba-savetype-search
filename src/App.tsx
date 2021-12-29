import { useState } from "react";
import { GBASoftware } from "./types";
import { SoftwareList } from "./components/SoftwareList";
import { softwareList as list } from "./assets/gba-software.json";

export const App = () => {
  const [softwareList] = useState<GBASoftware[]>(list);

  return (
    <div className="App bg-gray-800 w-full min-h-screen ">
      <SoftwareList softwareList={softwareList} />
    </div>
  );
};

export default App;
