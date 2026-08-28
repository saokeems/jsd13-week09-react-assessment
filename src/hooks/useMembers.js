import { useEffect, useState } from "react";

const API_URL = "https://6a9132b07751d35ce47e45ca.mockapi.io/members";

export const useMembers = () => {
  const [section, setSection] = useState("normal");
  const [members, setMembers] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    position: "",
  });

  const fetchMembers = async () => {
    try {
      const res = await fetch(API_URL);
      const data = await res.json();
      setMembers(data);
    } catch (error) {
      console.log("Error fetching:", error);
    }
  };

  useEffect(() => {
    fetchMembers();
  }, []);

  const handleCreate = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.position) return;

    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setFormData({
          name: "",
          lastName: "",
          position: "",
        });
        fetchMembers();
      }
    } catch (error) {
      console.log("Error creating:", error);
    }
  };

  const handleDelete = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "DELETE",
      });

      if (res.ok) {
        fetchMembers();
      }
    } catch (error) {
      console.log("Error deleting:", error);
    }
    setMembers(members.filter((member) => member.id !== id));
  };

  return {
    section,
    setSection,
    members,
    formData,
    setFormData,
    handleCreate,
    handleDelete,
  };
};
