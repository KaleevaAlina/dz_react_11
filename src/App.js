import React from 'react';
import './App.css';
import DopComponent from "./components/dopComponents";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';

class Main extends React.Component{
  render(){
      return <h2>Главная страница</h2>;
  }
}
class Login extends React.Component{
  render(){
      return <h2>Страница ввода логина и пароля</h2>;
  }
}
class News extends React.Component{
  render(){
      return  <div>
              <input type="text" value="Отправить"/>
              <h2>Страница с новостями</h2>;
              </div>;     
  }
}
class Profile extends React.Component{
  render(){
      return <h2>Страница с производьным тексом </h2>;
  }
}

 
  
class Nav extends React.Component{
  render(){
      return <nav>         
          <Link class = 'active' to="/Main ">Главная</Link> 
          <Link class = 'active' to="/Login">Логин</Link>
          <Link class = 'active' to="/News">Новости</Link>
          <Link class = 'active' to="/Profile">Профиль</Link>
            </nav>;
  }
}
export default function App() {
  return (
    <Router> 
      <div class="menu">
        <Nav />
        <Switch>
            <Route exact path="/Main " component={Main} />
            <Route path="/Login" component={Login} />
            <Route path="/News" component={News} />
            <Route path="/Profile" component={Profile} />
        </Switch> 
      </div> 
        <ul>
          <li>
            <button variant="contained" color="secondary">
            <Link class = 'li' to="/dop">DOP</Link>
            </button>
          </li>
        </ul>

        <Switch>
          <Route component={DopComponent} path="/dop" />
        </Switch>
       
    </Router>
  );
} 
