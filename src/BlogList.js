import {Link } from "react-router-dom";

const BlogList = (props) => {

    const blogs = props.blogsProp;
    // props returns a object 
    //functions can be sent as props, the benifit of this is functions can send stuff up 
 

    return ( 
        <div className="blog-list">
            <h2>{props.titleProp}</h2>
        {
            blogs.map(blog => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p>written by {blog.author}</p>
                    {/* <button onClick={() => props.handleDeleteProp(blog.id)}>delete blog</button> */}
                    </Link>
                </div>
            ))
        }
        </div> 
     );
}
 
export default BlogList