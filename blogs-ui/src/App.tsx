import React, { useState, useEffect } from "react";
import "./App.css";
import { User } from "./models";
import apiService from "./services/user-service";
import { UserButton } from "./components/UserButton";
import { Posts } from "./components/Posts";

const App: React.FC = () => {
  const [state, setState] = useState<State>({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    apiService.getUsers().then(users => {
      setState({ ...state, users: [...users] });
      setLoading(false);
    }).catch(err => {
      setLoading(false);
      //TODO: show error page ..
    });
  }, []);

  const selectUser = (user: User) => {
    setState({ ...state, selectedUser: user });
  };
  return (
    <>
      <div className="container">
        <h4>Please select a user below to load the posts:</h4>
        {!loading && state.users &&
          state.users.map(u => (
            <UserButton
              key={u.id}
              selectUser={selectUser}
              user={u}
              selectedUser={state.selectedUser}
            ></UserButton>
          ))}
          {loading && (
            <div className="">Loading .....</div>
          )}
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
