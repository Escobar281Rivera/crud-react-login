import  { useState } from 'react';
import { MakeLogin } from '../../stores/auth.store';
import '../../css/Login.css'
function Login() {
  const [email, setEmail] = useState('');
  const [pass, setPassword] = useState('');

  const handleLogin = async () => {
    const data_send = {
      email: email,
      pass: pass,
    };
    const loginSuccessful = await MakeLogin(data_send);

    if (loginSuccessful) {
    
    }
  };
  return (
    <div className="center-container">
      <div className="login-container">
        <div className="left-container">
          <h2>Iniciar Sesión</h2>
          <div className="form-group">
            <label htmlFor="email">Correo Electrónico:</label>
            <input
              type="email"
              id="email"
              className="input-field"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="pass">Contraseña:</label>
            <input
              type="pass"
              id="pass"
              className="input-field"
              value={pass}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="login-button" onClick={handleLogin}>
            Iniciar Sesión
          </button>
        </div>
        
      </div>
    </div>
  );
  
  
  
}

export default Login;
