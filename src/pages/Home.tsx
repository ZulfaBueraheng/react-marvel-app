import { FC } from "react";
import { useTitle } from "../hooks/useTitle";

const Home = () => {
  useTitle(`Home`);

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-800 p-4">
      <h1 className="text-white text-3xl font-bold font-mono text-center mt-4">
        Marvel App
      </h1>

      <img
        src="https://images.unsplash.com/photo-1613834926943-9e4ac2945744?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="marvel home picture"
        className="md:h-6/12 lg:h-2/4 object-cover rounded my-7 shadow-sm shadow-blue-400"
      />
    </div>
  );
};

export default Home;
