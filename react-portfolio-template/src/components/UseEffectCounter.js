import React, {useState, useEffect} from 'react'
// useEffect runs every time the component mounts & updates unless otherwise specified.
// useEffect replaces the CDM and CDU methods.
// Always have a second property (line 11, line 17('count')) to specify what the function needs to look at to be triggered. Without, it will be updating more than necessary and can cause issues on large-scale apps.

function UseEffectCounter() {
    const [count, setCount] = useState(0)
    // const [count2, setCount2] = useState(0)
    const [time, setTime] = useState(0)

    useEffect(() => {
        console.log('Count 1 effect')
        document.title = count;
    }, [count]); //this array is a parameter which tells the useEffect function what to look out for. If the correct property updates, the component will update. Otherwise, it will not.

    // useEffect(() => {
    //     console.log('Count 2 effect')
    //     document.title = count2;
    // }, [count2]);

    //A useEffect functions that only runs once (on mounting for example).
    
    useEffect(() => {
        console.log('Creating timer...');
        const interval = setInterval(() => {
            console.log('Interval is executed')
            setTime(prevTime => prevTime + 1); // Corrected state update
        }, 1000);
        return () => {
            console.log('Cleaning up and resetting timer...')
            clearInterval(interval); // Cleanup to prevent memory leaks.
        }
    }, []); // Runs only once on mount //empty array to only run it once

    
    return (
        <div>
            <button onClick={
                () => setCount(count => count + 1)}>
                Increment Count ({count})
            </button>

            {/* <button onClick={
                () => setCount2(count2 => count2 + 1)}>
                Increment Count 2 ({count})
            </button> */}

            <h2>Time is {time}</h2>
        </div>
    )
}

export default UseEffectCounter
