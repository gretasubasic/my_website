import { useEffect } from "react"
import Navbar from "./Navbar";
import Main from "./Main";
import About from "./About";
import ProjectsPage from "./ProjectsPage";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import { useGlobalContext } from "./context/context";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";




function App ()  {
  const {loading, setLoading, timeOutID} = useGlobalContext()

useEffect(() => {
    timeOutID()
})



if(loading) {
    return <Loading />
    }





  return (
    
    <Router>
    
       <Navbar/>
      <Sidebar/>

      <Switch>
      <Route exact path='/'>
        <Main/>
      </Route>
      <Route path='/about'>
        <About/>
      </Route>
      <Route path='/projects'>
        <ProjectsPage />
      </Route>

      <Route path='/contact'>
        <Footer/>
      </Route>
      </Switch>
    </Router>
  
    
  );
}





export default App;
