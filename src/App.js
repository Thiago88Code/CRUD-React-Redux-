import "./App.css"
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { addUser, deleteUser, updateUsername } from "./features/UsersReducers"

function App() {

  const dispatch = useDispatch()
  const userList = useSelector((state) => state.users.value)

  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [newUsername, setNewUsername] = useState("")


  return (
    <>
      <div className="container1">
        <input type={"text"} value={name} onChange={(e) => { setName(e.target.value) }} placeholder="name..."></input>
        <input type={"text"} value={username} onChange={(e) => { setUsername(e.target.value) }} placeholder="username..."></input>
        <button onClick={() => {
          dispatch(addUser({ id: userList[userList.length - 1].id + 1, name, username }))
          setName("")
          setUsername("")
        }}>add User
        </button>
      </div>

      <div className="container2">
        {userList.map((user) => {
          return <div key={user.id}>
            <h1>{user.name}</h1>
            <h1>{user.username}</h1>

            <input type={"text"} value={newUsername} onChange={(e) => { setNewUsername(e.target.value) }} placeholder="username..."></input>

            <button onClick={() => {
              dispatch(updateUsername({ id: user.id, username: newUsername }))
              setNewUsername("")
            }}>Update Username
            </button>
            <button onClick={() => { dispatch(deleteUser({ id: user.id })) }}>Delete</button>
          </div>
        })}
      </div>
    </>
  )
}

export default App;
