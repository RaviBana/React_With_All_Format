import { createContext,useState } from "react";

export const UserContext = createContext();

export function UserContextProvider(props) {
    const [user, setUser] = useState("Guest");
  
    return (
      //create context wala UserContext hai ye
      <UserContext.Provider value={{ user, setUser }}>
        {props.children}
      </UserContext.Provider>
    );
  }