
import { useState } from 'react';
import './App.css';
import { LC, NC, SC, UC } from './Data/chart';

function App() {
  // used____states
  let[upperCase,SetUperCase]=useState(false)
  let[lowwerCase,SetLowwerCase]=useState(false)
  let[numberCase,SetNumberCase]=useState(false)
  let[specialCase,SetSpecialCase]=useState(false)
  let[Passwordlen,Setpasswordlen]=useState(10)
  let [fPass,SetfPass]=useState('')
  let CreatePassword=()=>{
     if(upperCase || lowwerCase || numberCase || specialCase){
    let chartset = ''
    let finalPass= ''
    if(upperCase) chartset += UC ;
    if(lowwerCase) chartset += LC ;
    if(numberCase) chartset += NC ;
    if(specialCase) chartset += SC ;
    // for___loop used
    for(let i=0;i<Passwordlen;i++){
  finalPass+=chartset.charAt(Math.floor(Math.random()*chartset.length))

    }    SetfPass(finalPass)
    }else{
      alert("please slect any character")
    }
  }
  // copy____data
  let copyData=()=>{
    navigator.clipboard.writeText(fPass)
  }
 
  return (
    <div className='App'>
       <h1 className='text-3xl font-bold my-[40px]'>Password Strenght App</h1>
    <div className='form bg-green-300'>
   
    <div className='input-form'>
        <input className='p-[5px] w-4/5 outline-0' value={fPass} placeholder='Enter Your Email' type='text'/>
      <button className='w-1/5 border p-1' onClick={copyData}>copy</button>
    </div>
    <div className='checkbox p-5'>
    <div className='box'>
        <p>Passwword length</p>
      <input type='number' max={20} min={10} value={Passwordlen} onChange={(event)=>Setpasswordlen(event.target.value)} className='w-12'/>
      </div>
      <div className='box'>
        <p>uppercase chracter</p>
      <input type='checkbox' checked={upperCase}  onChange={()=>SetUperCase(!upperCase)}/>
      </div>
      <div className='box'>
        <p>lowercase chracter</p>
      <input type='checkbox'  checked={lowwerCase}  onChange={()=>SetLowwerCase(!lowwerCase)}/>
      </div>
      <div className='box'>
        <p>numbers chracter</p>
      <input type='checkbox'  checked={numberCase}  onChange={()=>SetNumberCase(!numberCase)}/>
      </div>
      <div className='box'>
        <p>special chracter</p>
      <input type='checkbox'  checked={specialCase}  onChange={()=>SetSpecialCase(!specialCase)}/>
      </div>
    </div>
      <button onClick={CreatePassword} className='border border-black w-4/5 bg-orange-500'  >create Password</button>
    </div>
    </div>
  );
}

export default App;
