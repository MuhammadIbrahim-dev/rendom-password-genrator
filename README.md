# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
````
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


 
````
# social links
github
https://www.github.com/MuhammadIbrahim-dev

facebook
https://www.facebook.com/Muhammadibrahimdev?mibextid=ZbWKwL
<br/>
instagram
https://www.instagram.com/ibrahim_dev_/profilecard/?igsh=OW90aHI2eWxja2o4
<br/>
linkdin
https://www.linkedin.com/in/muhammad-ibrahim-profile/
<br/>
Youtube
https://www.youtube.com/ibrahim-developer
<br/>
tiktok
https://www.tiktok.com/@ibrahimdeveloperofficial
