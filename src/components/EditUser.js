// Updated EditUser.js with lightweight CSS styling
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "../styles/EditUser.css";

function EditUser() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + `/users/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setName(data.name);
        setEmail(data.email);
      })
      .catch((error) => console.error("Error fetching user:", error));
  }, [id]);

  const handleUpdate = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(process.env.REACT_APP_API_URL + `/users/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email }),
      });

      if (res.ok) {
        navigate("/users");
      } else {
        alert("Failed to update user");
      }
    } catch (error) {
      console.error("Error updating user:", error);
    }
  };

  return (
    <div className="edit-user-container">
      <h1 className="title">Edit User</h1>
      <form className="edit-user-form" onSubmit={handleUpdate}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
          className="input-field"
        />
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="input-field"
        />
        <button type="submit" className="update-btn">Update</button>
      </form>
    </div>
  );
}

export default EditUser;
