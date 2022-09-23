import React from "react";

function Home() {
  return (
    <div>
      <div class="sm:hidden p-16 mx-auto drop-shadow-2xl">
        <div class="flex justify-center  pt-4 ">
          <img
            class="rounded-full w-44 h-44 max-w-2xl "
            src="https://media.discordapp.net/attachments/1005498488517312653/1005695876108406784/1659846958231.jpg?width=563&height=563"
          />
        </div>
        <h class="text-xl text-center  flex flex-col font-bold ">
          Hi, I am Himanshu,<span>Frontend </span>
          <span> Developer</span>
        </h>

        <p class="text-center mt-4 mx-3 ">
          I'm a frondend developer and this is my official portfolio website to
          showes all details and work exprins web development.
        </p>
        <div class="flex justify-center sm:justify-start ">
          <a
            class="px-4 py-2 bg-primary-dark text-white mt-4 rounded drop-shadow-xl "
            target="_blank"
            href="/image/Resume.pdf"
          >
            Download Resume
          </a>
        </div>
      </div>

      <div class="sm:flex mt-8 sm:justify-between px-32 py-20 hidden items-center drop-shadow-2xl ">
        <div class="flex flex-col">
          <h class="text-3xl flex flex-col font-bold ">
            Hi, I am Himanshu,<span>Frontend Developer</span>
          </h>

          <p class=" text-xl mt-12 ">
            I'm a frondend developer and this is my official <br></br>portfolio
            website to showes all details and work<br></br> exprins web
            development.
          </p>
          <div class="flex justify-start ">
            <a
              class="px-3 bg-primary-dark text-white mt-12 py-2 rounded drop-shadow-xl"
              target="_blank"
              href="/image/Resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </div>

        <img
          class="rounded-full ml-16 w-64 h-64 border border-sky-500"
          src="https://media.discordapp.net/attachments/1005498488517312653/1005695876108406784/1659846958231.jpg?width=563&height=563"
        />
      </div>
    </div>
  );
}

export default Home;
