import HomeTitle from "../components/HomeTitle";
import UserForm from "../components/UserForm";
import MemberTable from "../components/MemberTable";
import SectionButtons from "../components/SectionButtons";
import { useMembers } from "../hooks/useMembers";

const Home = () => {
  const {
    section,
    setSection,
    members,
    formData,
    setFormData,
    handleCreate,
    handleDelete,
  } = useMembers();

  return (
    <div className="w-full px-4">
      <HomeTitle section={section} />

      <SectionButtons setSection={setSection} />

      {section === "admin" && (
        <UserForm
          formData={formData}
          setFormData={setFormData}
          handleCreate={handleCreate}
        />
      )}

      {section !== "normal" && (
        <MemberTable
          members={members}
          section={section}
          handleDelete={handleDelete}
        />
      )}
    </div>
  );
};
export default Home;
