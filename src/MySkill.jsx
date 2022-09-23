import React from "react";

function MySkill() {
  return (
    <div className="border-2 drop-shadow-sm">
      <div className="flex items-center justify-center py-5 mb-5 text-2xl bg-blue-200">
        <h>My skills </h>
      </div>

      <div className="flex flex-wrap justify-center gap-2 py-24 sm:gap-9">
        <div className="flex items-center justify-center w-32 h-32 p-5 bg-white rounded-full drop-shadow-xl">
          <a className="" href="https://html.com/" target="_blank">
            <img
              className="w-24 h-24"
              src="https://curious-sunburst-62c482.netlify.app/assets/html.b7817ea6.png"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-32 h-32 p-5 bg-white rounded-full drop-shadow-xl">
          <a
            href="https://www.w3.org/Style/CSS/Overview.en.html"
            target="_blank"
          >
            <img
              className="w-24 h-24"
              src="https://curious-sunburst-62c482.netlify.app/assets/css.11b3f7b7.png"
            />
          </a>
        </div>

        <div className="flex items-center justify-center w-32 h-32 p-5 bg-white rounded-full drop-shadow-xl">
          <a href="https://www.javascript.com/" target="_blank">
            <img
              className="w-24 h-24 "
              src="https://curious-sunburst-62c482.netlify.app/assets/javascript.ee250e6c.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center w-32 h-32 p-5 bg-white rounded-full drop-shadow-xl">
          <a href="https://tailwindcss.com/" target="_blank">
            <img
              className="w-24 h-24"
              src="https://curious-sunburst-62c482.netlify.app/assets/tailwindcss.27f6d544.png"
            />
          </a>
        </div>
        <div className="flex items-center justify-center w-32 h-32 p-5 bg-white rounded-full drop-shadow-xl">
          <a href="https://reactjs.org/" target="_blank">
            <img
              className="w-24 h-24"
              src="https://curious-sunburst-62c482.netlify.app/assets/reactjs.a6445c75.png"
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default MySkill;
