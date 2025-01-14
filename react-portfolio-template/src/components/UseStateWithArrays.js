import React, {useState} from 'react'

function UseStateWithArrays() {
    const [nums,setNums] = useState([1,2,3])
    const addNums = () => {
        setNums([...nums, nums.length + 1]);
    }
    const subtractNums = () => {
        setNums(
            nums.filter((item, idx) => {
                return idx !== nums.length - 1;
            })
        )
    }

    // The below method doesn't update as expected and may cause errors. Above method is better.
    // const buggyPushNums = () => {
    //     nums.push(nums.length + 1);
    //     setNums(nums);
    //     console.log(nums)
    // }
    
  return (
    <div>
        <button onClick={addNums}>Add Items</button>
        <button onClick={subtractNums}>Subtract Items</button>
        {/* <button onClick={buggyPushNums}>Buggy Push Item</button> */}
        <ul>
            {nums.map(num => <li key={num}>{num}</li>)}
        </ul>
    </div>
  )
}

export default UseStateWithArrays