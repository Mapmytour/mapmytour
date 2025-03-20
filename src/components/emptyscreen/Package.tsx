import React from "react";
import GetCallBack from "../common/GetCallBack";

export default function Package() {
  return (
    <div className="flex flex-col justify-center items-center" >
      <h1 className="font-medium text-xl">Relax we are currently adding packages for this location</h1>
      <p>Feel free to reach out for any query</p>
      <div className="min-w-[400px]">

      <GetCallBack />
      </div>
    </div>
  );
}
