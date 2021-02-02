import BlogList from './BlogList';
import {useState,useEffect} from 'react';
// props are a way to pass data from one component a parent component into a child component 
const Home = () => {
    
  

    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ])

    const [name, setName] = useState('mario');
        // useeffect hook runs a function every render of the components, the component renders initially when it first loads and it renders jsx to the dom but it also happens when the state changes it re-renders the dom so we can update that sate in the browser 
        // so useeffect is a way to run code on every render which has it's benifits 
    const handleDelete = (id) => {
        // filter does not change the original data is just returns a new filtered array 
       const newBlogs = blogs.filter(blog => blog.id !== id); 
       setBlogs(newBlogs)
    }

    useEffect(() => {
       // pass a argument which is a function and this is the function that's going to run everytime there is re-render so once initially when the component first loads but thereafter any time the data changes  
       // normally we would do something like fetch data or communicate with some kind of authenication service and those things are known as side effects in react 
       // useeefect is really useful for running any kind of code that you need to run at every render such as fething data         
       console.log(name);

    }, [name]);
    // so useeffect works with the state of the component 
    // [] first render 
    //  add actual dependencies to this array so any state values that should trigger the use effect function to run when they change   

    return ( 
        <div className="home">
          <BlogList blogsProp={blogs} titleProp={2} handleDeleteProp={handleDelete}/>
          {/* <BlogList blogsProp={blogs.filter(blog => blog.author != 'mario')} titleProp="not mario blogs"/> */}
          <button onClick={() => setName('tom')}>{name}</button>
        </div> 


     );
}
 
export default Home;