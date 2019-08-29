import React, { useState, useEffect } from "react";
import "./App.css";
import { User } from "./models";
import apiService from "./services/user-service";
import { UserButton } from "./components/UserButton";
import { Posts } from "./components/Posts";

const App: React.FC = () => {
  const [state, setState] = useState<State>({});
  useEffect(() => {
    console.log(`Running effect`);
    apiService.getUsers().then(users => {
      setState({ ...state, users: [...users] });
    });
  }, []);

  const selectUser = (user: User) => {
    setState({ ...state, selectedUser: user });
  };
  return (
    <>
      <div className="container">
        <h4>Please select a user below to load the posts:</h4>
        {state.users &&
          state.users.map(u => (
            <UserButton
              key={u.id}
              selectUser={selectUser}
              user={u}
              selectedUser={state.selectedUser}
            ></UserButton>
          ))}
      </div>

      {state.selectedUser && (
        <main role="main" className="container">
        <Posts user={state.selectedUser}></Posts>
        </main>
      )}
    </>
  );
};

export default App;

export interface State {
  users?: User[];
  selectedUser?: User;
}
