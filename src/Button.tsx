import { formatName } from "./helpers";
import { TUser } from "./types";

type TButtonProps = {
  user: TUser;
  onClick: (eventTargetValue: number) => void;
};

function Button({ user, onClick }: TButtonProps) {
  return (
    <button onClick={(event) => onClick(event.target.value)} value={user.id}>
      {formatName(user)}
    </button>
  );
}

export default Button;
