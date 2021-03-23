import {Route, Switch} from 'react-router-dom'
import Dashboard from './components/Categories/Categories'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Petdetails from './components/PetDetails/PetDetails'
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
        <Switch>
          <Route path="/" exact component={Dashboard} />
          <Route path="/categories/:category" component={Dashboard} />
          <Route path="pets/details/:petId" component={Petdetails} /> 
        </Switch>
      <Footer />
    </div>


  );
}

export default App;
