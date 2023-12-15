import axios from "axios"
import { useEffect, useState } from "react";
export default function ListUser() {

    //STATE PARA RECEBER DADOS VINDOS DA API 
const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    function getUsers() {

    
    axios.get('http://localhost:80/api/users').then(function(response) {
        console.log(response.data);
        setUsers(response.data)

    })
}

// FUNÇÃO PARA REMOÇÃO DE DADOS

function deleteUser(id) {
    axios.delete('http://localhost/api/${id}/delete').then(function(response){
        console,log(response.data);
        getUsers();
    })
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
        {users.map((user, key) =>
         <tr key={key}>
         <td>{user.id}</td>
         <td>{user.name}</td>
         <td>{user.email}</td>
         <td>{user.telefone}</td>
         <td>
            <Link to={`user/${user.id}/edit`} style={{marginRight: "10px"}}>Edit</Link>
            <button onClick={() => deleteUser(user.id)}>Delete</button>
         </td>
     </tr>
        )}
       
    </tbody>
</table>
        </div>
    )
}