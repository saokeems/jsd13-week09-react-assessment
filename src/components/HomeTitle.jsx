const HomeTitle = ({section}) => {
  return (
    <h1 className="text-4xl font-bold text-center mb-8">
      <span className="block">Generation Thailand</span>
      {section === "normal" && (
        <span className="block">React - Assessment</span>
      )}
      {section === "user" && <span className="block">Home - User Section</span>}
      {section === "admin" && (
        <span className="block">Home - Admin Section</span>
      )}
    </h1>
  );
};
export default HomeTitle;
