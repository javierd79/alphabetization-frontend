import '../styles/Register.css'
import axios from 'axios'
import { API_URL } from '../utils/Constants'
import { useState } from 'react'
import { Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [isError, setIsError] = useState<boolean>(false)

  const handleLogin = () => {
    axios.post(API_URL + '/login', {
      email: email,
      password: password
    }).then((res) => {
      setIsError(false)
      localStorage.setItem('token', res.data.token)
      res.data.user.role !== 'Student' ? window.location.href = '/admin' : window.location.href = '/dashboard'
    }).catch(() => {
      setIsError(true)
    })
  }

  return (
    <div className="w-users-userformpagewrap full-page-wrapper">
      <a href="./index.html" className="form-page-logo-link w-inline-block">
        <img src="/img/ADlogonew2.png" loading="lazy" alt="Memberbase Logo" className="form-page-logo" />
      </a>
      <div className="w-users-userloginformwrapper admin-form-card">
        <form>
          <div className="w-users-userformheader form-card-header">
            <h2 className="heading h3">Bienvenido de vuelta</h2>
            <p className="paragraph small">Sigue aprendiendo con Alfabeización Digital</p>
          </div>
          <input 
            type="email" 
            maxLength={256} 
            placeholder="Correo" 
            name="email" 
            id="wf-log-in-email" 
            className="text-field w-input" 
            required 
            data-wf-user-form-input-type="email" 
            onChange={(e) => setEmail(e.target.value)}
          />
          <input 
            type="password" 
            maxLength={256} 
            placeholder="Contreseña" 
            name="password" 
            id="wf-log-in-password" 
            className="text-field w-input" 
            required 
            data-wf-user-form-input-type="password" 
            onChange={(e) => setPassword(e.target.value)}
          />
          <input 
            value="Inicia Sesión" 
            data-wait="Por favor espere..." 
            className="w-users-userformbutton button w-button" 
            onClick={handleLogin}
          />
          <div className="w-users-userformfooter form-card-footer">
            <span>¿Eres nuevo en Alfabetización Digital?</span>
            <Link to="/create-your-account">Crea tu cuenta</Link>
          </div>
        </form>
        <div style={{ display: isError ? 'block' : 'none' }} data-wf-user-form-error="true" className="w-users-userformerrorstate form-error w-form-fail">
          <div className="user-form-error-msg" wf-login-form-general-error-error="We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems." wf-login-form-invalid-email_or_password-error="Invalid email or password. Please try again.">We&#x27;re having trouble logging you in. Please try again, or contact us if you continue to have problems.</div>
        </div>
      </div>
      <a href="/forget-password" className="below-card-link">Olvidaste tu contraseña?</a>
    </div>
  )
}

export default Login