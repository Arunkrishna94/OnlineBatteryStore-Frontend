// Updated UsersList.js with Role-Based Access Control (RBAC)
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/UsersList.css";

function UsersList() {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [role, setRole] = useState("user"); // Default role, should be fetched from auth context or backend
  const navigate = useNavigate();

  useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/users")
      .then((res) => res.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching users:", error));

    // Fetch user role from backend or authentication context
    fetch(process.env.REACT_APP_API_URL + "/auth/role")
      .then((res) => res.json())
      .then((data) => setRole(data.role))
      .catch((error) => console.error("Error fetching role:", error));
  }, []);

  const deleteUser = async (id) => {
    if (role !== "admin") {
      alert("You do not have permission to delete users.");
      return;
    }
    try {
      const res = await fetch(process.env.REACT_APP_API_URL + `/users/${id}`, { method: "DELETE" });
      if (res.ok) {
        setUsers(users.filter((user) => user.id !== id));
      } else {
        alert("Failed to delete user");
      }
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="users-list-container">
      <h1 className="title">Users List</h1>
      <input
        type="text"
        placeholder="Search users..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="search-bar"
      />
      <ul className="users-list">
        {filteredUsers.map((user) => (
          <li key={user.id} className="user-item">
            {user.name} - {user.email}
            {role === "admin" && (
              <>
                <button className="edit-btn" onClick={() => navigate(`/users/edit/${user.id}`)}>Edit</button>
                <button className="delete-btn" onClick={() => deleteUser(user.id)}>Delete</button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default UsersList;
