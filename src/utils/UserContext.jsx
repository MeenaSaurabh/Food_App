import { createContext } from "react";

const UserContext = createContext({
  loggedInUser: "Akshay Default",
});

export default UserContext;

// using this in Header,About, App.jsx, ResCard & Body
