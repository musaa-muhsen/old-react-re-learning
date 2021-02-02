import {useParams, useHistory} from "react-router-dom";
import useFetch from "./useFetch"

const BlogDetails = () => {
   
    const {id} = useParams();// this is the first thing that happens get the id to get the information 
    const {isPending, data : blog, error} = useFetch('http://localhost:3005/blogs/' + id);
    const historyObj = useHistory();
    console.log(blog);
    
   //console.log(blog)

   const handleClick = () => {
       fetch('http://localhost:3005/blogs/' + id, {
           method: 'DELETE'
       }).then(() => historyObj.push('/'));
       // this is asynchronous .then() is going to fire when its complete 
   }
    return ( 
        <div className="blog-details">
            {isPending && <div>Loading...</div>}
            {error && <div>{error}</div>}
            {blog && (
                <article>
                   <h2>{blog.title}</h2>
                   <p>Written by {blog.author}</p>
                   <div>{blog.body}</div>
                   <button onClick={handleClick}>delete</button>
                </article>
                
            )}
        </div>
     );
}
 
export default BlogDetails;

/*
    const useFetchObj = useFetch(');
    const isPending = useFetchObj.isPending;
    const data = useFetchObj.data;
    const error = useFetch().error

    same as 
*/