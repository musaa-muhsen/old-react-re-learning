
import './App.css';
// babel is what compiles the jsx to html 
// anything under v17 needs import react from {react}
// manually reload on browser 
// remember always export components 
// cannot output baloons and objects 
// App.js is this root component 
const link = "https://google.com"

function App() {

  const title = "welcome to the new blog";
  const likes = 50;

  return (
    <div className="App">
       <div className="content">
         <h1>{title}</h1>
         <p>liked {likes} times</p>
         <p>{[10,9,8,7]}</p>
         <p style={{
                   color: "white",
                   backgroundColor: '#f1356d',
                   borderRadius: '8px'
               }}>{Math.random() * 10}</p>

         <a href={link}>Google site</a>
        </div> 
    </div>
  );
}

export default App;
