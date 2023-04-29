import axios from "axios"
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import style from "./home.module.css"

const Createuser=()=>{

    let navigate = useNavigate()

    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [phno, setPhno] = useState("")
    
    let nameData=(e)=>{setName(e.target.value)}
    let passData=(e)=>{setPassword(e.target.value)}
    let phoneData=(e)=>{setPhno(e.target.value)} 

    let formHandle=(e)=>{
        let payload = {name,password,phno};
        axios.post('http://LocalHost:8083/user',payload)
        .then(()=>{console.log("Yes data added");
            console.log(name);
            console.log(password);
            console.log(phno);
        navigate("/user")
    })
        .catch(()=>{console.log("No data is not added");})
    }

    return(
        <div id={style.myForm}>
            <table>
                <tr>
                    <th colSpan={2}>Create</th>
                </tr>
                <tr>
                    <td><label>Name</label></td>
                    <td>:<input type="text" value={name} onChange={nameData}/></td>
                </tr>
                <tr>
                    <td><label>password</label></td>
                    <td>:<input type="password" value={password} onChange={passData}/></td>
                </tr>
                <tr>
                    <td><label>Phone</label></td>
                    <td>:<input type="tel" value={phno} onChange={phoneData}/></td>
                </tr>
                <tr>
                    <th><button onClick={formHandle}>Submit</button></th>
                </tr>
            </table>
        </div>
    )
}

export default Createuser