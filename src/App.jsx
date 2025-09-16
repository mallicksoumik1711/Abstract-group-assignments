
import ShowUsers from "./components/ShowUsers"
import AddUser from "./components/AddUsers";
import UpdateUsers from "./components/UpdateUsers";
import { Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Routes>
      <Route path="/" element={<ShowUsers />} />
      <Route path="/showUsers" element={<ShowUsers />} />
      <Route path="/addUsers" element={<AddUser />} />
      <Route path="/updateUser" element={<UpdateUsers/>} />
    </Routes>
  )
}

export default App
