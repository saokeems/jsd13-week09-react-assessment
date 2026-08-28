import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <h1 className="text-4xl mb-8">404 not found</h1>
      <Link to="/">
        <span className="border p-2 rounded-md hover:bg-gray-300">
          กลับหน้าแรก
        </span>
      </Link>
    </div>
  );
};
export default NotFoundPage;
