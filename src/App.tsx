import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { USERS } from "./constants";

function App() {
  const [selectedPerson, setSelectedPerson] = useState();

  return (
    <>
      <h1>Using TypeScript</h1>
      <div className="card">
        <h3>Users</h3>
        {USERS.map((user) => (
          <Button user={user} onClick={setSelectedPerson} />
        ))}
        <h3>{`Selected User ID: ${selectedPerson}`}</h3>
      </div>
    </>
  );
}

export default App;
