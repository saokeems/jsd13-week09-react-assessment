import { useState } from "react";

const Home = () => {

  const [section, setSection] = useState("")

  return (
    <div>
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="block">Generation Thailand</span>
        <span className="block">React - Assessment</span>
      </h1>

      <div className="flex gap-12 mb-12">
        <button className="bg-white px-5 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100">
          User Home Section
        </button>
        <button className="bg-white px-5 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100">
          Admin Home Section
        </button>
      </div>
    </div>
  );
};
export default Home;
