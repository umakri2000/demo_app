import logo from './logo.svg';
import './App.css';
function Name(){
  return(<div>Hi Kris</div>)
}
  // functional component does not need root.render
function App(data) { 
  console.log(data)
  const { firstName,ClanName }=data
  // let demomeen={{}}
  return (
    <div className='thisApp'>
      <h1>Hi This is {firstName}{ClanName}</h1>
    
      
    </div>
  );
}


export default App;
