import {useState} from "react";
import {useHistory} from 'react-router-dom';
/*
so controlled inputs are basically a way in react of setting up input fields in forms so that we can track their values 
so if we had a text input field for example a user can type into it and we can store that value of what they type in some kind 
of state and we can also make it so that if the state changes that in turn updates the value that we see in the input field 
therefore we're always keeping the inpit field and our state in sync with each other
*/
const Create = () => {

    const state = useState('');
    const state2 = useState('');
    const body = state2[0];
    const setBody = state2[1]
    const [author, setAuthor] = useState('mario');
    const [isPending, setIsPending] = useState(false);
    const historyObj = useHistory();
    //console.log(historyObj.location.pathname);
    /*
now when a button is pressed inside a form it fires a submit event on the form itself so we can listen for that submit event and react to it now another option would be attach a click event to the button itself and react to that instead      
    */
    
    function handleSubmit(event) {
        event.preventDefault();
         //console.log(state[0]);
         const title = state[0];
         const blog = {title, body, author};

         setIsPending(true);
        
         fetch('http://localhost:3005/blogs', {
             method: 'POST',
             headers: {"Content-Type": "application/json"},
             body: JSON.stringify(blog)
         }).then(() => {
            console.log('new blog added');
            setIsPending(false);
            historyObj.push('/');
         })


// JSON.string = turn this from an object into a json string and so to do that we use the json object then we use a method called stringify and we pass in the object we want to turn into a json string   

     }



    
    return ( 
        <div className="create">
            <h2>Add a New Blog</h2>
            <form onSubmit={handleSubmit}>          
                <label>Blog title:  </label>
                <input 
                type="text"
                required
                //  value is considered two way binding 
                value={state[0]}
                onChange={(e) => state[1](e.target.value) }
                />
                 <label>Blog body:  </label>
                 <textarea 
                   required
                   value={body}
                   onChange={(e) => setBody(e.target.value)}

                 > </textarea>
                 <label>Blog author:  </label>
                 <select
                    value={author}
                    onChange={e => setAuthor(e.target.value)}
                 >
                     <option value="mario">mario</option>
                     <option value="yoshi">yoshi</option>
                 </select>
                 {!isPending && <button>Add Blog</button>}
                 {isPending && <button disabled>Adding blog...</button>}
                 {/* <p>{state[0]}</p>
                 <p>{body}</p>
                 <p>{author}</p> */}
                
                
            </form>
        </div>
     );
}
 
export default Create;