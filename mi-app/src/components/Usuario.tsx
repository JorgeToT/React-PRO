import { useState } from "react";

interface User {
  id: number;
  name: string;
}

const tempUser: User = {
  id: 666,
  name: "JA",
};

export const Usuario = () => {
  const [user, setUser] = useState<User>(tempUser);

  const login = () => {
    setUser({
      id: 123,
      name: "Jorge",
    });
  };

  return (
    <div className="my-4">
      {!user ? <pre>No hay usuario</pre> : <pre>{JSON.stringify(user)}</pre>}
      <button onClick={login} className="btn btn-outline-primary mt-2">
        Login
      </button>
    </div>
  );
};
