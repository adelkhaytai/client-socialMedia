import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Auth.css";
import "../../style/button.css";
import { logIn, signUp } from "../../redux/actions/AuthAction";
import Animation from './Animation.jsx'
const Auth = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [data, setData] = useState({firstname:"",lastname:"",password:"",confirmpass:"",username:""});
  const [confirmPass, setConfirmPass] = useState(true);
  const dispatch = useDispatch()
  const loading = useSelector((state)=>state.authReducer.loading)
  console.log(loading)

  const resetForm = () => {
    setConfirmPass(true);
    setData({firstname:"",lastname:"",password:"",confirmpass:"",username:""});
  };


  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      data.password === data.confirmpass
      ? dispatch(signUp(data))
      : setConfirmPass(false)
    } else{
      dispatch(logIn(data))
    }
  };

  return (
   <>
   <Animation />
   <div className="Auth">
      <div className="form">
        <Form onSubmit={handleSubmit}>
          <h3>{isSignUp ? "Sign Up" : "Log In"} </h3>

          {isSignUp && (
            <div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>FirstName</Form.Label>
                <Form.Control type="text" value={data.firstname} name="firstname" placeholder="Firstname" onChange={handleChange}/>
                {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" value={data.lastname} placeholder="LasName" name="lastname" onChange={handleChange}/>
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
            </div>
          )}

          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>FirstName</Form.Label>
            <Form.Control type="text" placeholder="Firstname" />
           
          </Form.Group> */}
          {/* <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>LastName</Form.Label>
            <Form.Control type="text" placeholder="LasName" />
          </Form.Group> */}
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>UserName</Form.Label>
            <Form.Control type="text" value={data.username} placeholder="UserName" name="username" onChange={handleChange}/>
            {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" value={data.password} placeholder="Password" name="password" onChange={handleChange}/>
          </Form.Group>
        {isSignUp &&  <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control type="password" value={data.confirmpass} placeholder="Password" name="confirmpass" onChange={handleChange}/>
          </Form.Group>}
          
            <span style={{display: confirmPass? "none" : "block" , color:"red"}}>confirm password is not same !</span>
          
          <span style={{ color: "black",cursor:'pointer' }} onClick={ ()=> {setIsSignUp((prev)=>!prev );resetForm()}} >
        {isSignUp
                ? "Already have an account Login"
                : "Don't have an account Sign up"}
          </span>

          <br />
          <br />
          <button className="button-85">
          {loading ? "Loading..." : isSignUp ? "SignUp" : "Login"}
            </button>
         
        </Form>
      </div>
    </div>
   </>
    
  );
};

export default Auth;
