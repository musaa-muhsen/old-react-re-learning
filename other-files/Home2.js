import {useState} from 'react';

const Home = () => {
    // state of a component we just mean the data being used in that component at that point in time now state could be an array of values, strings, bolloean etc 
    
    const [name,setName] = useState('mario'); // at  useState('mario'); were just invoking it we need to store 
   const [age, setAge] = useState(25);

    const handleClick = (e) => {
       setName('luigi');
       setAge(30);
    }
    
    return ( 
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <button onClick={handleClick}>Click Me</button>
         </div> 
     );
}
 
export default Home;