import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"
import style from "./home.module.css"

const Edituser=()=>{

    let {index} = useParams()
    let navi = useNavigate()

    let [name, setName] = useState("")
    let [password, setPassword] = useState("")
    let [phno, setPhno] = useState("")

    useEffect(()=>{
        axios.get(`http://LocalHost:8083/user/${index}`)
        .then((e)=>{
            console.log("Data fetching to updated");
                        setName(e.data.body.name)
                        setPassword(e.data.body.password)
                        setPhno(e.data.body.phno)
                    })
        .catch(()=>{console.log("no did not get the data")})},[]
            )

    let nameData=(e)=>{setName(e.target.value)}
    let passData=(e)=>{setPassword(e.target.value)}
    let phData=(e)=>{setPhno(e.target.value)}

    let formHandle=(e)=>{
        let payload = {name,password,phno};
        axios.put(`http://LocalHost:8083/user/${index}`,payload)
        .then(()=>{console.log("Yes data updated");
        navi("/user")})
        .catch(()=>{console.log("Not updated");})
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
                    <td><label>Pass</label></td>
                    <td>:<input type="password" value={password} onChange={passData}/></td>
                </tr>
                <tr>
                    <td><label>Company</label></td>
                    <td>:<input type="tel" value={phno} onChange={phData}/></td>
                </tr>
                <tr>
                    <th><button onClick={formHandle}>Submit</button></th>
                </tr>
            </table>
        </div>
    )
}


export default Edituser