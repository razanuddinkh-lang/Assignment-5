import { useState } from "react";

import {
  ToastContainer,
  toast,
} from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

import technologiesData from "./data/technologies.json";

import Navbar from "./components/Navbar";
import TechnologyCard from "./components/TechnologyCard";
import YourStack from "./components/YourStack";

import type {
  Technology,
  StackItem,
} from "./types/technology";

function App() {

  // JSON data
  const technologies: Technology[] =
    technologiesData;

  // Stack state
  const [stack, setStack] =
    useState<StackItem[]>([]);


  // ==========================================
  // ADD TO STACK
  // ==========================================

  const handleAdd = (
    technology: Technology
  ) => {

    const existingItem = stack.find(
      (item) =>
        item.id === technology.id
    );


    // Already exists
    if (existingItem) {

      setStack((previousStack) =>
        previousStack.map((item) =>
          item.id === technology.id
            ? {
                ...item,
                quantity:
                  item.quantity + 1,
              }
            : item
        )
      );

      toast.info(
        `${technology.name} quantity increased`
      );

      return;
    }


    // New item
    setStack((previousStack) => [
      ...previousStack,

      {
        ...technology,
        quantity: 1,
      },
    ]);

    toast.success(
      `${technology.name} added to your stack`
    );
  };


  // ==========================================
  // INCREASE
  // ==========================================

  const handleIncrease = (
    id: number
  ) => {

    setStack((previousStack) =>
      previousStack.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity:
                item.quantity + 1,
            }
          : item
      )
    );
  };


  // ==========================================
  // DECREASE
  // ==========================================

  const handleDecrease = (
    id: number
  ) => {

    setStack((previousStack) =>
      previousStack
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity:
                  item.quantity - 1,
              }
            : item
        )
        .filter(
          (item) =>
            item.quantity > 0
        )
    );
  };


  // ==========================================
  // REMOVE ONE
  // ==========================================

  const handleRemove = (
    id: number
  ) => {

    const item = stack.find(
      (item) =>
        item.id === id
    );

    setStack((previousStack) =>
      previousStack.filter(
        (item) =>
          item.id !== id
      )
    );

    if (item) {

      toast.error(
        `${item.name} removed`
      );

    }
  };


  // ==========================================
  // REMOVE ALL
  // ==========================================

  const handleRemoveAll = () => {

    if (stack.length === 0) {

      toast.info(
        "Your stack is already empty"
      );

      return;
    }

    setStack([]);

    toast.success(
      "All items removed from your stack"
    );
  };


  // ==========================================
  // TOTAL ITEMS
  // ==========================================

  


  return (
    <div className="min-h-screen bg-white-500 text-white">

      {/* Navbar */}
      <Navbar
        
      />


      {/* Main */}
      <main className="px-6 py-16 sm:px-10 lg:px-20">

        <div className="mx-auto max-w-7xl">


          {/* ================= HERO ================= */}

        <section className="grid grid-cols-2 gap-5 ">

            
          <div className="text-left">
             <h1 className="mt-4 text-2xl font-extrabold sm:text-4xl lg:text-4xl text-black">
              Build Your Ideal  
             </h1>
              

             <h1 className="mt-4 text-2xl font-extrabold sm:text-4xl lg:text-4xl">

              <span className="bg-gradient-to-r from-orange-600 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                Development Stack
              </span>

             </h1>

             

             <p className="text-left  text-gray-500">

              Explore frontend,backend,database and toolin options,<br/>
              compare them side by side,and put together the stack that fits your<br/>
              next project.
             </p>
             </div>

             <div className="w-1/1 flex justify-end">
               <img
                  src="/banner-stack.png"
                  alt="Developer illustration"
                   className="w-[250px] h-auto"
                />
            </div>


              {/* Button */}
             <div className="py-20 hidden gap-8 md:flex">
              <button
                className="text-sm rounded-lg bg-gradient-to-r from-orange-500 to-orange-700 px-5 py-1 px-2 text-lg  text-white transition duration-300 hover:from-green-500 hover:to-emerald-500">
                          
                  Explore Technologies
              </button>


              {/* Button */}
               <button className="rounded-lg bg-gray-200 hover:bg-gray-400 px-5 py-1 px-12 text-lg  text-black border-1 border-gray-500 transition duration-300 ">
                  
                          
                  Learn More
               </button>
            

            </div>


        </section>


          {/* ================= CONTENT ================= */}
          <div className="py-15">
           <h1 className= "text-black text-4xl font-bold ">
            Explore the <span className="bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 bg-clip-text text-transparent">Technologies</span>{" "}
            </h1>
            <p className= "text-gray-500  ">
              Pick one technology per category to build your ideal stack
            </p>
          </div>


          <div className="grid items-start gap-8 lg:grid-cols-[1fr_350px]">


            {/* ================= PRODUCTS ================= */}

            <section>

              
              <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

                {technologies.map(
                  (technology) => (

                    <TechnologyCard
                      key={technology.id}
                      technology={technology}
                      onAdd={handleAdd}
                    />

                  )
                )}

              </div>

            </section>


            {/* ================= YOUR STACK ================= */}

            <YourStack
              stack={stack}
              onIncrease={handleIncrease}
              onDecrease={handleDecrease}
              onRemove={handleRemove}
              onRemoveAll={
                handleRemoveAll
              }
            />

          </div>

        </div>
        <footer className=" mt-15 rounded-2xl bg-gray-900 text-white py-5">

         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

            {/* Column 1 - Logo + Input */}
           <div>
             <div className="flex items-center gap-2 mb-4">
              <img
                 src="/logo-text.png"
                 alt="Dev Stack Logo"
                 className="w-25 h-8"
                  />
             </div>

             <p className="text-gray-500 mb-5">
                Learn, build and grow with modern programming technologies.
             </p>

             <a href="#" className="hover:text-blue-400 transition">
                LinkedIn
             </a>
    </div>


    {/* Column 2 */}
    <div>
      <h3 className="text-xl font-semibold mb-5">
        Products
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li className="hover:text-white cursor-pointer">JavaScript</li>
        <li className="hover:text-white cursor-pointer">React</li>
        <li className="hover:text-white cursor-pointer">TypeScript</li>
        <li className="hover:text-white cursor-pointer">Node.js</li>
      </ul>
    </div>


    {/* Column 3 */}
    <div>
      <h3 className="text-xl font-semibold mb-5">
        Company
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li className="hover:text-white cursor-pointer">Home</li>
        <li className="hover:text-white cursor-pointer">Projects</li>
        <li className="hover:text-white cursor-pointer">About</li>
        <li className="hover:text-white cursor-pointer">Contact</li>
      </ul>
    </div>


    {/* Column 4 */}
    <div>
      <h3 className="text-xl font-semibold mb-5">
        Legal
      </h3>

      <ul className="space-y-3 text-gray-400">
        <li>Email: hello@devstack.com</li>
        <li>Website: www.opsonor.com</li>
        <li>Dhaka, Bangladesh</li>
      </ul>
    </div>

  </div>


  {/* Bottom Footer */}
  <div className="text-left border-t border-gray-800 mt-10 pt-6 text-center text-gray-500">
    <p>
      © 2026 Dev Stack. All rights reserved.
    </p>
  </div>

</footer>

      </main>


      {/* Toastify */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        theme="dark"
      />

    </div>
  );
}

export default App;
