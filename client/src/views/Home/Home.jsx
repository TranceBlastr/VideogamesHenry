import CardsContainer from "../../Components/CardsContainer/CardsContainer";
import {useEffect} from "react"
import {useDispatch} from "react-redux"
import {getGames} from "../../redux/actions"

const Home =()=>{
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(getGames());
  },[dispatch])

  return (
    <div>
      <h1>Vista de home</h1>
      <CardsContainer/>
   </div>
  )
}
export default Home;