import React from "react";
import CounterHoc from "./counterHoc";

function Hovercounter(props: any) {
  return (
    <div >
      <div >{props.count}</div>
      <div>
        <button
          onMouseOver={props.increment}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        >
          Hover here
        </button>
      </div>
    </div>
  );
}

export default CounterHoc(Hovercounter);
