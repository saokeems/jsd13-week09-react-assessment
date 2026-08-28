const MemberTable = ({ section, members, handleDelete }) => {
  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="flex items-center text-lg">
        <p className=" font-semibold mb-2">
          จำนวนสมาชิกทั้งหมด :<span className="text-blue-600"> {members.length}</span>
        </p>
      </div>
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
          {members.map((member) => (
            <tr key={member.id} className="border-b">
              <td className="border-r text-center bg-white">{member.name}</td>
              <td className="border-r text-center bg-white">
                {member.lastName}
              </td>
              <td className="border-r text-center bg-white">
                {member.position}
              </td>
              {section === "admin" && (
                <td className="border-r text-center bg-white">
                  <button
                    onClick={() => handleDelete(member.id)}
                    className="text-red-600 hover:text-red-700"
                  >
                    Delete
                  </button>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default MemberTable;
