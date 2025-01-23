import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    // <UserContext.Provider value= {{values}}>
    <UserContextProvider>
      <h1>welcome to the Basic context Tutorial</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
