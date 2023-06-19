import {Link} from "react-router-dom"
import styles from "./NavBar.module.css"

const NavBar = () =>{
  return (
    <div className={styles.mainContainer}>
      <Link to= "/Home">Home</Link>
      <Link to= "/Create">Create</Link>
      <Link to= "/">LogOut</Link>
    </div>
  )
}
export default NavBar