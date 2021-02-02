import {useState, useEffect} from 'react'

const useFetch = (url) => {

    // null = no value or [] as default 
const [data, setData] = useState(null);
const [isPending, setIsPending] = useState(true);
const [error, setError] = useState(null);

    useEffect(() => {
        const abortController = new AbortController();
        //console.log(abortController.abort);
        setTimeout(() => {
            async function fetchJSONFunc() {
         
                const responseObj = await fetch(url, {
                    signal: abortController.signal
                });
                 if (!responseObj.ok) {
                     throw new Error('could not fetch the data for the resource');
                 }
                const json = await responseObj.json(); // this parses the json into javascript object for us when this is complete it will be the json variable as the actual data   
                setData(json);
                setIsPending(false);
                setError(null);
            }
            
              //fetchJSONFunc().catch(error => console.log(error.message) )
              fetchJSONFunc().catch(error => {
                      if (error.name === 'AbortError') {
                          console.log('fetch aborted')
                      } else {
                        setIsPending(false);
                        setError(error.message);
                      }
                  
              })
        }, 1000);
        // clean up
        return () => abortController.abort();
     
    }, [url]); // whenever the url value changes it's going to re-run this function  
      // return as a object some values from this function. The reason why it's an object is because it doesnt matter about the order 
    return {
       data, isPending, error
    }
}

export default useFetch;



