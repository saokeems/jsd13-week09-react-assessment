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

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const res = await fetch(API_URL);
        const data = await res.json();
        setMembers(data);
        console.log(data);
      } catch (error) {
        console.log("Error fetching:", error);
      }
    };
    fetchMembers();
  }, []);

  const handleCreate = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.lastName || !formData.position) return;

    const newId = crypto.randomUUID();

    setMembers([...members, { ...formData, id: newId }]);
    setFormData({
      name: "",
      lastName: "",
      position: "",
    });
  };

  const handleDelete = (id) => {
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
