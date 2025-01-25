import React from "react";
import { useContext } from "react";

const UserContext = React.createContext(null);
// every context is a provider

// export default UserContext
export const UserContextHook = () => {
  return useContext(UserContext);
};

export default UserContext;