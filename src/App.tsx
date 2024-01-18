import './App.css'
import UserForm from "./components/UserForm/UserForm";
import Users from "./components/Users/Users";
import {useState} from "react";
import {User} from "./types";

function App() {

    const [users, setUsers] = useState<User[]>([]);

    const addUser = (user:User) => {
        setUsers(prevState => [...prevState, user])
    }

  return (
    <>
      <main className="main">
          <div>
              <UserForm onSubmit={addUser}/>
          </div>
          <div>
              <Users addUsers={users}/>
          </div>
      </main>
    </>
  )
}

export default App
