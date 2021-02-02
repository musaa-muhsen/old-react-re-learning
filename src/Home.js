
//import {useState,useEffect} from 'react';
import useFetch from './useFetch';
import BlogList from './BlogList';
// props are a way to pass data from one component a parent component into a child component 
const Home = () => {  
  
    const {data: blogs, isPending, error} = useFetch('http://localhost:3005/blogs');


    // so you use the state to filter/delete from the data when getting info from child component
    // const handleDelete = (id) => {
    //    const newBlogs = blogs.filter(blog => blog.id !== id); 
    //    setBlogs(newBlogs)
    // }

    // react router is going to step in and intercept that request to stop from going to the server and instead it's going to look at the new page request and inject the required content on the screen for example clicking on a contact link the react router will tell react to inject the contact component into the browser and so on     

   
// conditional rendering ampersand
    return ( 
        <div className="home">
            {error && <div>{error}</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogsProp={blogs} titleProp="all blogs" />}
  
        </div> 


     );
}
 
export default Home;