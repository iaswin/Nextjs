import React from "react";

const Body = () => {
  return (
    <div className="p-4">
      <div className="flex items-center justify-center relative space-x-4">
        <img src="./assets/Blue-Shape.svg" alt="1st" className="-rotate-45 h-64 " />
        <img src="./assets/Pink-Shape.svg" alt="2nd" className="absolute rotate-[30deg] h-64" />
        <img src="./assets/Purple-Shape.svg" alt="3rd" className="absolute rotate-[15deg] h-64 " />
        <img src="./assets/Hero-Model.png" alt="hero" className="absolute h-64 " />
      </div>
      <div>
        <h1 className="text-5xl font-bold font-playfair leading-tight"> Host Your Web-site in 10 minutes</h1>
            <p className="font-lato text-gray-400">
            With the use of hosterr you can easily host your website very easily.Use it for just for fun.

            </p>
            <form action="" className="flex flex-col gap-5">
                <input className="rounded-md px-4 py-3 placeholder:text-gray-400"type="email" placeholder="Enter your email">

                </input>
               <button className="rounded-md px-4 py-4 bg-blue-400 hover:bg-red-200">Join the Waitlist</button>
            </form>
            <div className="flex gap-2">
                <img src="./assets/Checkmark.svg " alt="checkmark"></img>
                <p className="font-lato text-gray-400">No spam ever,Un-subscribe any time</p>
            </div>
        
      </div>
    </div>
  );
};

export default Body;
