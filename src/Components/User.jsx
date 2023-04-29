import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import style from "./home.module.css"

const User=()=>{

    let [data, setData] = useState([])
    let [restart, setRestart] = useState(false)

    useEffect(()=>{
        axios.get('http://LocalHost:8083/user')
        .then((e)=>{console.log("Data fetching in user componets")
            setData(e.data.body)
       console.log(e.data.body);
        })
        .catch(()=>{console.log("no did not get the data")})},[restart]
            )

    let Deletes=(id)=>{
        axios.delete(`http://LocalHost:8083/user/${id}`)
        .then(()=>{console.log("Yes data Deleted")
            setRestart(!restart)})
    }

    return(
        <div id={style.myUser}>
            {data.map((x)=>{
                return(
                    <div id={style.cards}>
                    <table>
                        <tr>
                            <th>{"User"+x.id}</th>
                        </tr>
                        <tr>
                            <td>Name</td>
                            <td>:{x.name}</td>
                        </tr>
                        <tr>
                            <td>phone</td>
                            <td>:{x.phno}</td>
                        </tr>
                        <tr>
                            <td>password</td>
                            <td>:{x.password}</td>
                        </tr>
                        <tr>
                            <td><button><Link to={`/Edit/${x.id}`}>Edit</Link></button></td>
                            <td><button onClick={()=>{Deletes(x.id)}}>Delete</button></td>
                        </tr>
                    </table>
    </div>
                )
            })}
        </div>
    )
}

export default User