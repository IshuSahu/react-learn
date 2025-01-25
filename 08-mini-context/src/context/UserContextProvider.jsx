import React, { useState } from "react";
import UserContext from "./UserContext";

function UserContextProvider({ children }) {
  const [user, setUser] = useState(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );

  //if you not do this then you have to manage externally in all you boiler plate:
    // <UserProvider value={{ user, setUser }}>
    //     {/* Children */}
    // </UserProvider>;
}

export default UserContextProvider;
