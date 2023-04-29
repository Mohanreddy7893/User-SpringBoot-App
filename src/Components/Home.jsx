import { Link } from "react-router-dom"
import style from "./home.module.css"

const Home=()=>{
    return(
        <section id={style.nav}>
            <Link to="/">Create-User</Link>
            <Link to="/user">User</Link>
        </section>
    )
}


export default Home