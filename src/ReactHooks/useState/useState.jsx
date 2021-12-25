import React,{useState} from 'react' 

function Counter(){
    const[count,setCount] = useState(4)
    const[theme,setTheme] = useState('orange')
    function decrementCount(){
        setCount(prev=>prev-1)
        setTheme('blue')
    }
    function incrementCount(){
        setCount(prev=>prev+1)
        setTheme('red')
    }
    
    
    return(
        <>
        <button onClick={decrementCount}>-</button>
        <span>{count}</span>
        <span>{theme}</span>
        <button onClick={incrementCount}>+</button>

        </>
    )
}
export default Counter
/*
The first useState uses the count and the setCount where count stores the current state and setCount stores the 
updated state ,same we have created for themes separately.Used the prev value so that the values can be modified
according to the prev state 
*/

