import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import styled from 'styled-components';
import GirlSvg from "./components/GirlSvg"
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <Wrapper>
        <div className='container'>
          <div className='image'>
            <div>
              <GirlSvg />
            </div>
          </div>
          <div className='loginCont'>
            <h1 className='loginTitle'>Login</h1>
            <label className='inputLabel' htmlFor="">Login ID</label> <br />
            <input className='inputField' type="text" name="email" id="" placeholder='Enter login ID' /> <br />
            <label className='inputLabel' htmlFor="">Password</label> <br />
            <div className='passwordCont'>
              <input className='inputField' type={showPassword ? "text" : "password"} name="password" id="" placeholder='Enter Password' />
              {
                showPassword ?
                  <AiFillEye onClick={() => setShowPassword(!showPassword)} className='passwordToggleBtn' /> :
                  <AiFillEyeInvisible onClick={() => setShowPassword(!showPassword)} className='passwordToggleBtn' />
              }
            </div>
            <div className='checkboxContainer'>
              <div>
                <div className='checkboxCont'>
                  <input className='remember' type="checkbox" name="remember" id="" />
                  <label> Remember me</label><br />
                </div>
                <div className='checkboxCont'>
                  <input className='remember' type="checkbox" name="remember" id="" />
                  <label> Agree to <span className='terms'>Terms & Conditions</span></label><br />
                </div>
              </div>
              <div>
                <p className='changePass'>Change Password</p>
              </div>
            </div>
            <div className='btnCont'>
              <button className='loginBtn'>Login</button>
            </div>
            <p className='register'>Don't have an account? <span>Register Here</span></p>
          </div>
        </div>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
  .container {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px
  }
  .image {
    width: 40%;
    padding: 0 5%;
  }
  .image > div {
    width: 100%;
    margin: 0 auto;
  }
  .loginCont{
    width: 60%;
    padding: 200px 110px;
    margin: 0 0 0 40px;
    border-radius: 12px;
    box-shadow: 0px 10px 40px 0px rgba(0, 0, 0, 0.16);
  }
  .loginTitle {
    text-align: center;
    font-family: Poppins;
    font-size: 48px;
    font-weight: 700;
    line-height: 110%;
    margin: 0;
    padding-bottom: 40px;
  }
  .inputLabel {
    color: #04072F;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
  }
  .inputField {
    border-radius: 8px;
    border: 1px solid rgba(4, 7, 47, 0.40);
    background-color: white;
    color: #737B86;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    margin: 10px 0px 32px 0;
    padding: 18px;
    width: 95%
  }
  .passwordCont{
    position: relative;
  }
  .passwordToggleBtn {
    position: absolute;
    right: 0px;
    top: 26%;
    width: 24px;
    height: 24px;
    color: #737B86;
    margin-right: 20px;
    cursor: pointer
  },
  .checkboxCont{
    display: flex;
    align-items: center
  }
  .checkboxCont > label {
    margin-left: 8px;
    color: #737B86;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: 110%;
    cursor: pointer
  }
  .terms{
    color: #F78719;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;
  }
  .changePass{
    color: #F78719;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    margin: 0;
    cursor: pointer
  },
  .checkboxContainer{
    display: flex;
    justify-content: space-between;
  },
  .loginBtn {
    background-color: #1575A7;
    border-radius: 8px;
    color: white;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: 110%;
    padding: 18px 244px;
    border: none;
    margin: 40px auto;
    cursor: pointer
  }
  .loginBtn:hover {
    background-color: black;
  }
  .btnCont {
    display: flex;
    justify-content: center
  },
  .register {
    text-align: center
  }
  .register > span {
    color: #F78719;
    font-family: Poppins;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration-line: underline;
    cursor: pointer
  }


  @media (max-width: 1500px) {
    .container{
      padding: 20px
    }
    .image {
      padding: 20px
    }
    .loginCont {
      padding: 200px 30px;
      margin: 0
    }
  }
  @media (max-width: 1000px) {
    .container {
      display: block;
    }
    .image {
      width: 90%;
    }
    .image > div {
      width: 80%;
      margin: 0 auto;
    }
    .loginCont {
      width: 90%;
      padding: 50px 30px;
      margin: 0 auto;
    }
  }
  @media (max-width: 600px) {
    .loginBtn{
      padding: 18px 100px;
    }
    .inputField {
      width: 90%
    }
    .loginCont {
      width: 80%
    }
  }
`;

export default App
