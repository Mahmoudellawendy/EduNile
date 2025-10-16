import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users")) || [];
    if(users.find(u => u.email === email)){
      alert("Email already exists");
      return;
    }
    const newUser = { name, email, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));
    localStorage.setItem("currentUser", JSON.stringify(newUser));
    navigate("/dashboard");
  }

  return (
    <div className="w-50 mx-auto">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" className="form-control my-2" placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
        <input type="email" className="form-control my-2" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input type="password" className="form-control my-2" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
}
