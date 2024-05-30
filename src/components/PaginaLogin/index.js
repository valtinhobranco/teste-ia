import React from 'react';
import './styles.css';

export function PaginaLogin() {
  //! ************ PESQUISEM sobre formulario no react useState *************  
  // const [inputUser, setInputUser] = useState("");
  // const [inputPasswork, setInputPasswork] = useState("");
  //! ************ PESQUISEM sobre formulario no react useState *************  
  const handleLoginSubmit = (event) => {
    event.preventDefault();
    const username = event.target['login-username'].value;
    const password = event.target['login-password'].value;
    console.log(`Login attempt with Username: ${username} and Password: ${password}`);
    // Aqui você pode adicionar a lógica de autenticação
  };

  const handleRegisterSubmit = (event) => {
    event.preventDefault();

    const name = event.target['register-name'].value;
    
    const username = event.target['register-username'].value;
    const password = event.target['register-password'].value;
    console.log(`Register attempt with Name: ${name}, Username: ${username}, and Password: ${password}`);
  
    // Aqui você pode adicionar a lógica de registro
  };

  return (
    <main className='page'>

    <section className="container">
      <header className="header">
        <h1 className="logo">Sigma.IA</h1>
        <h2>Faça seu login!</h2>
        <p>ou faça seu cadastro conosco</p>
      </header>
        
      <div className="form-container">
          <form id="login-form" onSubmit={handleLoginSubmit}>
              <fieldset>
                  <h3>Login</h3>
                <div className="input-wrapper">
                   <label htmlFor="login-username">Usuário:</label>
                  <input type="text" id="login-username"  name="login-username" required />
                </div>
                <div className="input-wrapper">
                  <label htmlFor="login-password">Senha:</label>
                  <input type="password" id="login-password" name="login-password" required />
                </div>
                  <button type="submit">Login</button>
              </fieldset>
          </form>

          <form id="register-form" onSubmit={handleRegisterSubmit}>
              <fieldset>
                 <h3>Cadastro</h3>
                <div className="input-wrapper">
                    <label htmlFor="register-name">Nome:</label>
                     <input type="text" id="register-name" name="register-name" required />
                </div>
                <div className="input-wrapper">
                    <label htmlFor="register-username">Usuário:</label>
                    <input type="text" id="register-username" name="register-username" required />
                 </div>
                <div className="input-wrapper">
                    <label htmlFor="register-password">Senha:</label>
                    <input type="password" id="register-password" name="register-password" required />
                </div>
                <button type="submit">Cadastrar</button>
            </fieldset>
          </form>
      
      </div>
    </section>
    </main>
  );
}



