import Header from './components/Header';
import JoinNow from './components/Home/JoinNow';
import Spec from './components/Home/Spec';
import HowPortalWork from './components/Home/HowPortalWork';
import Footer from './components/Footer';
import Partner from './components/Home/Partner';
import Login from './components/Login/login';
import Signup from './components/Signup/signup';
import Home from './components/Home/HowPortalWork';
import { BrowserRouter , Link, Route } from 'react-router-dom';
import { RouterSharp } from '@material-ui/icons';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/" exact render={() => (
          <div>            
            <Header />
            <JoinNow />
            <Spec />
            <HowPortalWork />
            <Partner />            
            <Footer/>
          </div>
        )}>       
        </Route>
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        
    </div>
      
    </BrowserRouter>
    
  );
}

export default App;
