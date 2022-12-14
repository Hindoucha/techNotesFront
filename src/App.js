import {Routes, Route} from "react-router-dom"
import DashLayout from "./components/DashLayout";
import Layout from './components/Layout'
import Public from "./components/Public";
import Login from './features/auth/Login'
import Welcome from './features/auth/Welcome'
import NotesList from './notes/NotesList'
import UsresList from './users/UsersList'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Public/>} />
        <Route path="login" element={<Login />} />.
        <Route path="dash" element={<DashLayout />}>
          <Route index element={<Welcome />}/>
          <Route path="notes">
            <Route index element={<NotesList />}/>
          </Route>
          <Route path="users">
            <Route index element={<UsresList />}/>
          </Route>        
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
