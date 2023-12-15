import { useState, useEffect } from "react";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

export default function CreateUser(){

    // eDITANDO DADOS

    const Navigate = useNavigate();

   const [inputs, setInputs] = useState([])
const {id} = useParams();

   const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setInputs(values => ({...values, [name]: value}));
   }
    const handleSubmit = (event) => {
        event.preventDefault();

        // REQUERINDO DADOS DA API 

        axios.post('http://localhost/api/${id}/edit', inputs).then(function(response) {
            console.log(response.data);
            Navigate('/');
        });
        console.log(inputs);
    }

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
                <input value={inputs.name} type="text" name="name" onChange={handleChange}/>
                </td>
            </tr>

            <tr>
                <th>
                <label>Email: </label>
                </th>
                <td>
                <input value={inputs.email}  type="text" name="email"/>
                </td>
            </tr>
            
            <tr>
                <th>
                <label>Telefone: </label>
                </th>
                <td>
                <input value={inputs.telefone}  type="text" name="telefone"/>
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
 