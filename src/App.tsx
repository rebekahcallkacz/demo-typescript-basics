import { useState } from "react";
import "./App.css";
import Button from "./Button";
import { USERS } from "./constants";
import { TUser } from "./types";

function App() {
  const [selectedPerson, setSelectedPerson] = useState<number>();

  return (
    <>
      <h1>Using TypeScript</h1>
      <div className="card">
        <h3>Users</h3>
        {USERS.map((user: TUser) => (
          <Button key={user.id} user={user} onClick={setSelectedPerson} />
        ))}
        {selectedPerson && <h3>{`Selected User ID: ${selectedPerson}`}</h3>}
      </div>
    </>
  );
}

export default App;
