import { auth } from "../firebase";

export default function Dashboard() {
  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={() => auth.signOut()}>Logout</button>
    </div>
  );
}
