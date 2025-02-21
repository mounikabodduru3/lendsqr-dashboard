import { useState, ChangeEvent, FormEvent } from "react"
import Button from '../../components/Button/Button'
import SignInImage from '/assets/images/sign-in-image.png'
import Logo from '/assets/logo/lendsqr-icon.svg'
import './login.styles.scss'
import validator from 'validator';
import { useNavigate } from "react-router-dom"

const Login = () => {

  const navigate = useNavigate()
  const [showPassword, setShowPassword] = useState<boolean>(false)
  const [error, setError] = useState<string>("")
  const [loginValues, setLoginValues] = useState<Record<string, string>>({
    email: "",
    password: ""
  })

  const { email, password } = loginValues;
  // Function to show password
  const togglePassword = () => {
    setShowPassword((prevState) => !prevState)
  }

  // Function to validate and set form values
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault()

    if(!validator.isEmail(email)){
      setError("Please enter a valid email address")
    }else{
      setError("")
    }

    setLoginValues({
      ...loginValues,
      [e.target.name]: e.target.value
    }) 
  }

  const handleFormSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    setLoginValues({
      email: "",
      password: ""
    })
    setError("")

    navigate("/users")
  }



  return (
    <div className='background'>
      <section className='header-section'>
        <div className='lendsqr-icon'>
          <img src={Logo} alt='lendsquare icon'/>
        </div>
      </section>
      <section className='login-container'>
        <div className='img-section'>
          <div>
            <img src={SignInImage} alt='illustrative art'/>
          </div>
        </div>
        <div className='form-section'>
            <div className='header'>
              <div role="heading">Welcome!</div>
              <div role="subheading">Enter details to login.</div>
            </div>
            <div className='form-wrapper'>
              <form title="form" onSubmit={handleFormSubmit}>
                {error && <small>{error}</small>}
                <input 
                  type="email" 
                  placeholder='Email' 
                  className='email' 
                  name='email'
                  value={email}
                  onChange={handleChange} 
                  required
                />
                <div className='password-wrapper'>
                  <input 
                    type={showPassword ? "text" : "password"} 
                    name='password'
                    aria-roledescription="password field" 
                    placeholder='Password' 
                    className='password'  
                    value={password}
                    onChange={handleChange} 
                    required
                  />
                  <span 
                    className='show-password'  
                    aria-description="show password" 
                    onClick={togglePassword}>
                    { showPassword ? "HIDE" : "SHOW" } 
                  </span>
                </div>
                <div className='forgot-password'>
                  FORGOT PASSWORD?
                </div>
                <div className='login-btn'>
                  <Button buttonType='default' type='submit'>LOG IN</Button>
                </div>
              </form>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Login