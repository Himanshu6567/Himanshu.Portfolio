import React from "react";

function LetsTalk() {
  return (
    <div className="p-10 border sm:p-32 border-sky-500">
      <div className="text-6xl sm:flex sm:justify-center text-primary-dark ">
        Lets talk
      </div>
      <div className="justify-center gap-5 sm:flex mt-9">
        <div className="flex flex-col">
          <label for="Name">Name</label>
          <input id="Name" className="h-10 w-60"></input>
        </div>
        <div className="flex flex-col">
          <label for="Email">Email</label>
          <input id="Email" type="email" className="h-10 w-60"></input>
        </div>
      </div>

      <div className="flex justify-center mt-8 ">
        <div className="flex flex-col">
          <label for="Subject">Subject</label>
          <input id="Subject" className="h-10 w-60"></input>
        </div>
      </div>

      <div className="justify-center sm:flex">
        <div className="flex flex-col">
          <label for="Message">Message</label>
          <textarea rows="4" cols="60" id="Message" className=""></textarea>
        </div>
      </div>
      <div className="justify-center mt-5 sm:flex">
        <button className="py-3 text-white rounded hover:bg-primary-default px-7 bg-primary-dark">
          Send Message
        </button>
      </div>
    </div>
  );
}

export default LetsTalk;
