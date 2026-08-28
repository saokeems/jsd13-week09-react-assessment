const SectionButtons = ({setSection}) => {
  return (
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
  );
};
export default SectionButtons;
