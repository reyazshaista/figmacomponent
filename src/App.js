// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;


import React from 'react';
//import logo from './logo.svg';
//import './App.css';
import  {Backpackwindow,BarLine,Buildingthecdw, Chat,ChatbotTasks,Creatingcdwprofile,Goodtogo,Loadingscreen,Logoforconferenceevent,Firstoption} from './ui-components';

function App() {
  return (
    <div className="App">
      
        <h1>SCREEN</h1>
        < Backpackwindow/>
        <br/>
        < BarLine/>
        <br/>
        < Buildingthecdw />
        <br/>
        < Chat/>
        <br/>
        < ChatbotTasks/>
        <br/>
        < Creatingcdwprofile/>
        <br/>
        < Goodtogo/>
        <br/>
        < Loadingscreen/>
        <br/>
        < Logoforconferenceevent /> 
        <br />
        < Firstoption />
    </div>
  );
}

export default App;