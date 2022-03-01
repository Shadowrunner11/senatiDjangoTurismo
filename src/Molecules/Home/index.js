import Header from "../../components/Header"
import NavBar from "../../components/navBar"

const Home = ()=>{
    return(
        <div>
    
            <NavBar links={[
            {route:'/lugares', text:'Lugares'},
            ]
          }/>
            <Header/>
        </div>
    )
}

export default Home