import axios from "axios"
import { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

export default function ListUser() {

    //STATE PARA RECEBER DADOS VINDOS DA API 
const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {
    
    axios.get("https://apirestfullteste.000webhostapp.com/).then(function(response) {
        console.log(response.data);
        setUsers(response.data);

    });
}

// FUNÇÃO PARA REMOÇÃO DE DADOS

const deleteUser = (id) => {
    axios.delete(`https://apirestfullteste.000webhostapp.com/${id}/delete`).then(function(response){
        console.log(response.data);
        getUsers(response.data);
    });
}

// RETORNANDO LISTA DE DADOS COLOCANDO EM UMA TABELA DINÂMICA

    return (
        <div>
           
        <h1>List Users</h1>
        
        
<table>
    <thead>
        <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Telefone</th>
            <th>Action</th>
            
        </tr>
    </thead>
    <tbody>
    {users.map((user, key) => (
         <tr key={key}>
         <td>{user.id}</td>
         <td>{user.nome}</td>
         <td>{user.email}</td>
         <td>{user.telefone}</td>
         <td>
            <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
         </td>
     </tr>
    ))
   
  
    }
       
    </tbody>
</table>
        </div>
    )
}
