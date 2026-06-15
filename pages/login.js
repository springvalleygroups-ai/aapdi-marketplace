import { useState } from "react";
import { auth } from "../lib/firebase";
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  const register = async () => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created ✅");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ padding: 40 }}>
      <h2>Login / Register</h2>
      <input
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <br /><br />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <br /><br />
      <button onClick={login}>Login</button>
      <button onClick={register} style={{ marginLeft: 10 }}>
        Register
      </button>
    </div>
  );
}
