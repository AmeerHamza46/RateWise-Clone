import React from "react";

function ScrollingLogos() {
  return (
    <>
      <div className="flex overflow-hidden space-x-16 bg-lime-400 py-10 font-bold text-xl text-gray-200 mx-[145px] max-[1536px]:mx-0">
        <div className="flex space-x-16 animate-loop-scroll ">
          <span>Voltify</span>
          <span>Amplivo</span>
          <span>Elevon</span>
          <span>Powerzen</span>
          <span>Nexture</span>
          <span>Dynaboost</span>
          <span>Proxima</span>
        </div>
        <div
          className="flex space-x-16 animate-loop-scroll "
          aria-hidden="true"
        >
          <span>Voltify</span>
          <span>Amplivo</span>
          <span>Elevon</span>
          <span>Powerzen</span>
          <span>Nexture</span>
          <span>Dynaboost</span>
          <span>Proxima</span>
        </div>
      </div>
    </>
  );
}

export default ScrollingLogos;
