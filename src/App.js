import logo from './logo.svg';
import './App.css';
import Div from './components/bai1'
import Bai2 from './components/bai2'
import Bai3 from './components/bai3'
import {useState} from 'react'
function App() {
  const [text1,setText1]=useState('hidden')
  const [text,setText]=useState('Hà Xuân Tuấn')
  function handerClick(){
    if(text1=='hidden') {
      setText('')
      setText1('show')
    }
    if(text1=='show') {
      setText('Hà Xuân Tuấn')
      setText1('hidden')
    }
  }
  const arr=['số1','số2','số3','số4','số5']
  function alerts(i){
    alert(i)
  }
  return (
    <div className="App">
       <Div color='red' shape='circle'></Div>
       <Div color='green' shape='circle'></Div>
       <Div color='blue' shape='circle'></Div>
       <div>
         <Bai2 
           text={text}
           title={text1}
           onclick={handerClick}
         />
       </div>
       {arr.map(i=>{
       return <><Bai3 text1={i} text={i} onclick={alerts}/></>
     })}
    </div>
  );
}

export default App;
