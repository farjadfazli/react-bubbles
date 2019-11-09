import React, {useState} from "react";
import api from '../utils/axiosWithAuth'

const Login = (props) => {
  // make a post request to retrieve a token from the api
  // when you have handled the token, navigate to the BubblePage route

  const [error, setError] = useState()
  const [data, setData] = useState({
    username: '',
    password: ''
  })

  const handleChange = event => {
    setData({
      ...data,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault()
    console.log(data)
    api()
      .post('/api/login', data)
      .then(result => {
        console.log(result)
        localStorage.setItem('token', result.data.payload)
        props.history.push('/bubblepage')
      })
      .catch(err => {
        console.log(err)
      })
  }

  return (
    <>
      <h1>Welcome to the Bubble App!</h1><br></br>
      <form onSubmit={handleSubmit}>
        <input type='username' name='username' placeholder='Username' value={data.username} onChange={handleChange} />
        <input type='password' name='password' placeholder='Password' value={data.password} onChange={handleChange} />
        <button type='submit'>Sign In</button>
      </form>
    </>
  );
};

export default Login;
