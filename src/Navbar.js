// remember a component is just a function which returns a jsx template and then that function is exported  

import {Link} from 'react-router-dom';

const Navbar = () => {
    return ( 
       <nav className="navbar">
           <h1>The Dojo Blog</h1>
           <div className="links">
               <Link  to="/">Home</Link>
               <Link to="/create" >New Blog</Link>
           </div>
       </nav>
     );
}
 
export default Navbar;