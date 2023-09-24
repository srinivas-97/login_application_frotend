import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
function App() {

    const [data, setData] = useState({username:"", password:""});
    const [isFormSubmitted, setFormSumbit] = useState(false);
    const [showLoginError, setShowLoginError] = useState(false);


    const loginForm = () => {

      return(
        <div className='login-container'>
          <h1>Please Login</h1>
          <div className="form-container">
            <form className="form-login" onSubmit = {handleLoginForm}>
              {showLoginError && <p className="error-message">Please check username and passowrd</p>}
              <label>username:
              <input name="username" type="text" onChange = {changeUserNameHandler}/></label>
              <br/>
              <label>password:
              <input name="password" type="password" onChange = {changePasswordHandler}/></label>
              <br/>
              <button type="submit" className="submit-button">submit</button>
            </form>
          </div>
          </div>
          )
    }



    const successMessage = () => (<div className="success-message">Login Success</div>)

    const handleLoginForm = async event => {
      event.preventDefault()
      const url = 'https://loginapplication-production.up.railway.app/login'
      const options = {
        method: 'POST',
        body: JSON.stringify(data),
        headers: { 'Content-Type': 'application/json' },
      }
      const response = await fetch(url, options);
      if (response.ok === true) {
        setFormSumbit(true);
      } else {
        setFormSumbit(false);
        setShowLoginError(true)
      }
     
    }

    const changeUserNameHandler = (event) => {
          setData({...data, username: event.target.value})
    }
    const changePasswordHandler = (event) => {
      setData({...data, password: event.target.value})
}

  return (
    <div className="App">
      <div> {isFormSubmitted
            ? successMessage()
            : loginForm()}
        
      
      </div>
    </div>
  );
}

export default App;
