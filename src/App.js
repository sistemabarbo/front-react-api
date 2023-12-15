import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import CreateUser from './components/CreateUser';
import ListUser from './components/ListUser';
import EditUser from './components/EditUser';

// COMPONENTES DE ROTAS E LINKS

function App() {


  return (
 
    <div>
   <h5>React Crud operations using api and php and mysql</h5>
<BrowserRouter>
<nav>
  <ul>
    <li>
      <Link to="/">List Users</Link>
    </li>
    <li>
      <Link to="user/create">Create User</Link>
    </li>
  </ul>
</nav>
<Routes>
  <Route index element={<ListUser />} />
  <Route path='user/create' element={<CreateUser />} />
  <Route path='user/:id/edit' element={<EditUser />} />
</Routes>

</BrowserRouter>

   </div>
  );
}

export default App;
