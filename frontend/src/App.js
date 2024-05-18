import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import TeamMemberList from './components/TeamMemberList';
import AddTeamMember from './components/AddTeamMember';
import EditTeamMember from './components/EditTeamMember';

function App() {
   return (
       <Router>
           <div className="App">
               <Routes>
                   <Route path="/" element={<TeamMemberList />} />
                   <Route path="/add" element={<AddTeamMember />} />
                   <Route path="/edit/:id" element={<EditTeamMember />} />
               </Routes>
           </div>
       </Router>
   );
}

export default App;


/*import React from 'react';
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom';
import './App.css';
import TeamMemberList from './components/TeamMemberList';
import AddTeamMember from './components/AddTeamMember';
import EditTeamMember from './components/EditTeamMember';

function App() {
    return (
        <Router>
            <div className="App">
                <Routes>
                    <Route exact path="/" component={TeamMemberList} />
                    <Route path="/add" component={AddTeamMember} />
                    <Route path="/edit/:id" component={EditTeamMember} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
*/
/*import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import TeamMemberList from './components/TeamMemberList';
import AddTeamMember from './components/AddTeamMember';

function App() {
    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route exact path="/" component={TeamMemberList} />
                    <Route path="/add" component={AddTeamMember} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
*/
/*import logo from './logo.svg';
import './App.css';
import TeamMemberList from './components/TeamMemberList';

function App() {
  return (
      <div className="App">
          <TeamMemberList />
      </div>
  );
}

export default App;
*/
/*function App() {


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/