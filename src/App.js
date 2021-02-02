import Navbar from './Navbar';
import Home from './Home';
import Create from './Create';
import BlogDetails from './BlogDetails';
import NotFound from './NotFound';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// {} destructure 
// using Router means is that we can use the router in the entire application all components that are nested inside this app component have access to the router 
// switch component makes sure that only one route shows at any one time, so all of ours routes go in the switch component 
// with switch route and router its still goes to the server, you need import {Link} from 'react-router-dom'; <Link  to="/">Home</Link>
// * means catch any other route so it's a kind of a catch all route 

function App() {

  return (
    <Router>
     <div className="App">
      <Navbar/>
       <div className="content">  
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/create">
                <Create />
              </Route>
              <Route path="/blogs/:id">
                <BlogDetails />
              </Route>
              <Route path="*">
              <NotFound />
              </Route>
          </Switch>
        </div> 
     </div>
    </Router>
  );
}

export default App;
