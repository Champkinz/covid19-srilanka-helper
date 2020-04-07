import React, { useEffect, useState, useMemo } from "react";
import logo from "./logo.svg";
import "./App.css";
import { SDK } from "./sdk";
import { P } from "./component/atoms/typography";
import Stats from "./component/pages/stats";
import Food from "./component/pages/food";
import Activities from "./component/pages/activities";

function App() {
  const [data, setData] = useState();
  const [tab, setTab] = useState(1);
  const getInitData = async () => {
    const res = await new SDK().getInitData();
    console.log(res);
    setData(res);
  };
  const selectTab = () => {
    switch (tab) {
      case 1:
        return <Stats data={data} />;
      case 2:
        return <Food />;
      case 3:
        return <Activities />;
      default:
        return <Stats data={data} />;
    }
  };

  useEffect(() => {
    (async function runDataInit() {
      await getInitData();
    })();
  }, []);

  if (!data) {
    return null;
  }
  return (
    <div
      className="flex flex-1 flex-col min-h-screen"
      style={{ paddingTop: 100 }}
    >
      <div className="flex w-full flex-row justify-start head-title bg-white">
        <div className="p-4 flex flex-row">
          <img
            alt=""
            src="https://static.thenounproject.com/png/2522082-200.png"
            style={{ width: 40, height: "auto" }}
          />
          <P fontSize={26} fontWeight={500} color="#e74c3c">
            Quarantine Starter Pack
          </P>
        </div>
      </div>
      <div className="flex w-full flex-row justify-center">
        <button
          onClick={() => setTab(1)}
          className={`bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow rounded-full ${
            tab === 1 ? "bg-red-400 text-white" : "text-gray-800"
          }`}
        >
          Stats
        </button>
        <button
          onClick={() => setTab(2)}
          className={`bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4 rounded-full ${
            tab === 2 ? "bg-red-400 text-white" : "text-gray-800"
          }`}
        >
          Food
        </button>
        <button
          onClick={() => setTab(3)}
          className={`bg-white hover:bg-gray-100 font-semibold py-2 px-4 border border-gray-400 rounded shadow ml-4 rounded-full ${
            tab === 3 ? "bg-red-400 text-white" : "text-gray-800"
          }`}
        >
          Activities
        </button>
      </div>
      {selectTab()}
    </div>
  );
}

export default App;
