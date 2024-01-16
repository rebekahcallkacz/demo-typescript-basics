import { formatName } from "./helpers";

function Button({ user, onClick }) {
  return (
    <button onClick={(event) => onClick(event.target.value)} value={user.id}>
      {formatName(user)}
    </button>
  );
}

export default Button;
