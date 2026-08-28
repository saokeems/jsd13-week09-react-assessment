import { useState } from "react";

const Home = () => {
  const [section, setSection] = useState("normal");

  return (
    <div className="w-full px-4">
      <h1 className="text-4xl font-bold text-center mb-8">
        <span className="block">Generation Thailand</span>
        {section === "normal" && (
          <span className="block">React - Assessment</span>
        )}
        {section === "user" && (
          <span className="block">Home - User Section</span>
        )}
        {section === "admin" && (
          <span className="block">Home - Admin Section</span>
        )}
      </h1>

      <div className="flex gap-12 mb-12 justify-center">
        <button
          onClick={() => setSection("user")}
          className="bg-white px-5 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100"
        >
          User Home Section
        </button>
        <button
          onClick={() => setSection("admin")}
          className="bg-white px-5 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100"
        >
          Admin Home Section
        </button>
      </div>

      {section !== "normal" && (
        <div className="w-full max-w-2xl mx-auto">
          <table className="w-full border bg-white shadow-sm table-fixed">
            <thead>
              <tr className="border-b">
                <th className="border-r text-center bg-gray-200">Name</th>
                <th className="border-r text-center bg-gray-200">Last Name</th>
                <th className="border-r text-center bg-gray-200">Position</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="border-r text-center bg-white">Test</td>
                <td className="border-r text-center bg-white"></td>
                <td className="border-r text-center bg-white"></td>
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Home;
