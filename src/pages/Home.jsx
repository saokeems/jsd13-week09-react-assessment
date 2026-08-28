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
          className="bg-white w-45 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100"
        >
          User Home Section
        </button>
        <button
          onClick={() => setSection("admin")}
          className="bg-white w-45 py-3 rounded-md font-bold text-gray-800 shadow-md hover:bg-gray-100"
        >
          Admin Home Section
        </button>
      </div>

      {section === "admin" && (
        <div className="w-full mb-8">
          <h2 className="text-xl font-bold mb-4">Create User Here</h2>
          <form className="flex gap-4 w-full">
            <input
              type="text"
              placeholder="Name"
              className="p-2 rounded-md bg-white flex-1"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="p-2 rounded-md bg-white flex-1"
            />
            <input
              type="text"
              placeholder="Position"
              className="p-2 rounded-md bg-white flex-1"
            />
            <button
              type="submit"
              className="bg-blue-600 text-white px-3 py-2 rounded-md hover:bg-blue-800"
            >
              Save
            </button>
          </form>
        </div>
      )}

      {section !== "normal" && (
        <div className="w-full max-w-2xl mx-auto">
          <table className="w-full border bg-white shadow-sm table-fixed">
            <thead>
              <tr className="border-b">
                <th className="border-r text-center bg-gray-200">Name</th>
                <th className="border-r text-center bg-gray-200">Last Name</th>
                <th className="border-r text-center bg-gray-200">Position</th>
                {section === "admin" && (
                  <th className="border-r text-center bg-gray-200">Action</th>
                )}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="border-r text-center bg-white">Test</td>
                <td className="border-r text-center bg-white"></td>
                <td className="border-r text-center bg-white"></td>
                {section === "admin" && (
                  <td className="border-r text-center bg-white">
                    <button className="text-red-600 hover:text-red-700">
                      Delete
                    </button>
                  </td>
                )}
              </tr>
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};
export default Home;
