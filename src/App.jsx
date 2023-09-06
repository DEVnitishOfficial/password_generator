import { useCallback, useState } from 'react'
import './App.css'

function App() {
  const [length,setLength] = useState(8);
  const [addNum,setAddNum] = useState(false);
  const [addChar,setAddChar] = useState(false);
  const [Password,setPassword] = useState("")

  const passwordGenerator = useCallback(() => {
   let Password = ""
   let string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if(addNum) string += "0123456789"
    if(addChar) string += "!@#$%^&*-_+=[]{}~`"

    for(let i = 1; i <= array.length; i++){
      let char = Math.floor(Math.random() * string.length + 1)
      Password = string.charAt(char)
    }

    setPassword(Password)





  }, [length,addNum,addChar,setPassword])

  return (
    <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 text-orange-500 bg-gray-700'>
     Password generator <div className='flex shadow rounded-lg overflow-hidden mb-4 my-3'>
       <input type="text"
       value={Password}
       className='outline-none w-full py-1 px-3'
       placeholder='password'
       readOnly
       />

       <button className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>

      </div>

      <div className='flex text-sm gap-x-2'>
            <div className='flex items-center gap-x-1'>
                 <input 
                 type="range"
                 min={6}
                 max={100}
                 value={length}
                 className='cursor-pointer'
                 onChange={(e) => {setLength(e.target.value)}}
                 />

                 <label>Length:{length}</label>
            </div>
      </div>
    </div>

    </>
  )
}

export default App
