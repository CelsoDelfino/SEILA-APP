import React, { useState } from "react";
import "./login.css";
import logoproj from "../assets/logoproj.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleAcessar = (e) =>{
    e.preventDefault();
    
    if(email !== '' && senha !== ''){
      console.log(
        "email:"+email
        +"\nsenha:" + senha
      )
      alert("Cadastrado");
    }else{
      alert("Preencha todos os campos");
    }
  }

  return (
    <div className="container-center">
      <div className="tela-form">
        <form onSubmit={handleAcessar}>
          <div className="titulo">
            <h1>Bem-vindo</h1>
            <img src={logoproj} />
          </div>

          <label>Email</label>
          <input
            type="text"
            placeholder="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Senha</label>
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <button type="submit">Entrar</button>
        </form>
      </div>
    </div>
  );
}
