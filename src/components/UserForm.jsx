const UserForm = ({ formData, setFormData, handleCreate }) => {
  return (
    <div className="w-full mb-8">
      <h2 className="text-xl font-bold mb-4">Create User Here</h2>
      <form onSubmit={handleCreate} className="flex gap-4 w-full">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="p-2 rounded-md bg-white flex-1"
        />
        <input
          type="text"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={(e) =>
            setFormData({ ...formData, lastName: e.target.value })
          }
          className="p-2 rounded-md bg-white flex-1"
        />
        <input
          type="text"
          placeholder="Position"
          value={formData.position}
          onChange={(e) =>
            setFormData({ ...formData, position: e.target.value })
          }
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
  );
};
export default UserForm;
