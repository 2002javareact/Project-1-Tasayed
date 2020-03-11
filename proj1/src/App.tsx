import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Route /**, Switch*/ } from 'react-router-dom';
import { MessageComponent } from './components/MessageComponent';
import { LoginComponent } from './login-component/LoginComponent';



/**
 * CheckList: X = Done, O = TBD,  Y = In Progress
 * ----------------------------------------------
 * Manage Session O
 * Components: Y
 * - Login FrontEnd O
 * - Find Reimbursements By Status X - Finance Manager
 * - Find Reimbursements By User X - Finance Manager
 * - Submit Reimbursement X - User
 * - Update Reimbursement X - Finance Manager
 * - Find Users Y - Finance manager
 * - Find Users By ID X - Finance Manager
 * - Update User X - Admin
 * 
 * NavBar Component O
 * Make NavBar Reactable to Session O 
 *  
 * 
 * 
 * Potential Next Steps:
 * -----------------------------------------------
 * Fancy CSS
 * User can change only password
 * Admins cannot see each others passwords
 */

function App() {
  return (
    <div className="App">
      <Router>

        <Route path='/login' component={LoginComponent}/>
        <Route path='/' render={(props) => <MessageComponent history={props.history} match={props.match} location={props.location} message={'An example of the render design pattern for components'} />} />
        
      </Router>
      
    </div>
  );
}

export default App;
