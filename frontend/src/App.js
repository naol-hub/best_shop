import { Container } from 'react-bootstrap'
import Header from './components/Header'
import Footer from './components/Footer'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'



function App() {
  return (
    <div>
      <Router>
      <Header />
      <main className="py-5">
        <Container>
          <Route path ='/' component={HomeScreen} exact />
          <Route path ='/login' component={LoginScreen}/>
          <Route path ='/product/:id' component={ProductScreen} exact/>
          <Route path ='/product/:id?' component={CartScreen} exact/>
        </Container>
      </main>
     <Footer />
     </Router>
      
    </div>
  );
}

export default App;
