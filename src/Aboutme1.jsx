import React from "react";

function AboutMe1() {
  return (
    <div>
      <div className="flex items-end w-full h-24 p-3 px-6 overflow-hidden text-3xl bg-white">
        <h className="text-primary-default">About me</h>
      </div>
      <br></br>

      <div className="p-5 border-2 border-sky-200 drop-shadow-2xl ">
        <div className="gap-x-5 sm:flex sm:text-2xl">
          <h>Name: </h>
          <br></br>
          <h className=" text-primary-default">Himanshu Chandola </h>
        </div>
        <br></br>
        <br></br>
        <br></br>

        <div className="gap-x-5 sm:flex sm:text-2xl">
          <h>mob. </h>
          <br></br>

          <h className="text-primary-default">9719440155 </h>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="gap-x-5 sm:flex sm:text-2xl">
          <h>email: </h>
          <br></br>

          <h className="text-primary-default">himanshuchandola000@gmail.com </h>
        </div>
        <br></br>
        <br></br>
        <br></br>
        <div className="gap-x-5 sm:flex sm:text-2xl">
          <h>Address:</h>
          <br></br>

          <h className="text-primary-default"> Pithoragarh Uttrakhand, INDIA</h>
        </div>
      </div>
    </div>
  );
}

export default AboutMe1;
