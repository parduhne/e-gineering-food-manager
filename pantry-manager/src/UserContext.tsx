import React, { useContext } from "react";

export type UserContextType = {
  name: string;
  email: string;
  role: "user" | "admin";
  token: string;
};

const UserContext = React.createContext<UserContextType | undefined>(undefined);

interface UserContextProviderProps {
  children: React.ReactNode;
  value: UserContextType;
}

export default function UserContextProvider(props: UserContextProviderProps) {
  return (
    <UserContext.Provider value={props.value}>
      {props.children}
    </UserContext.Provider>
  );
}

// custom hook to consume the user data from any component.
export function useUserContext() {
  const userContext = useContext(UserContext);
  if (!userContext) {
    throw new Error("useUserContext must be wrapped in UserContextProvider.");
  }
  return userContext;
}
