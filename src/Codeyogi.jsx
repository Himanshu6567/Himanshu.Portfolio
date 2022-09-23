import React from "react";

function Codeyogi() {
  return (
    <div className="p-8 mt-28 bg-blue-50">
      <div className="flex justify-center px-5 text-2xl ">
        <h>
          "i am student of codeyogi, codeyogi offers me 6 month log free
          software engneering program."
        </h>
        <br></br>
      </div>

      <div className="flex items-center justify-center mt-5">
        <h>for more info. </h>
        <a href="https://codeyogi.io/" target="_blank">
          <img
            className="rounded-full w-28 h-28"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYF88oFqLI9fKhTfduvARQOWSyl1g_CIW3W5-Zs1I1Jg&s"
          />
        </a>
      </div>
    </div>
  );
}

export default Codeyogi;
