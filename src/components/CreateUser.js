import { useState } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";


    // INSERINDO INFORMAÇÕES NO BASE DE DADOS
    
export default function CreateUser(){

    const Navigate = useNavigate();

   const [inputs, setInputs] = useState([])
   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));
   }
    const handleSubmit = (event) => {
        event.preventDefault();

        axios.post('https://apirestfullteste.000webhostapp.com, inputs).then(function(response) {
            console.log(response.data);
            Navigate('/');
        });
        console.log(inputs);
    }

    // INSERINDO INFORMAÇÕES NO BASE DE DADOS

    return (

        <div>
        <h1>List User</h1>
<form onSubmit={handleSubmit}>
    <table cellSpacing="10">
        <tbody>
            <tr>
                <th>
                <label>Name: </label>
                </th>
                <td>
                <input type="text" name="nome" onChange={handleChange}/>
                </td>
            </tr>

            <tr>
                <th>
                <label>Email: </label>
                </th>
                <td>
                <input type="text" name="email" onChange={handleChange}/>
                </td>
            </tr>
            
            <tr>
                <th>
                <label>Telefone: </label>
                </th>
                <td>
                <input type="text" name="telefone" onChange={handleChange}/>
                </td>
            </tr>
            <tr>
                <td colSpan="2" align="right">
                <button>Save</button>
                </td>
            </tr>
        </tbody>
    </table>
    

</form>

</div>
    )
}
 
