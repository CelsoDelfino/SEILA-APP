import React, { useState } from "react";
import rockstar from "../../assets/rockstar.png";
import { Link } from "react-router-dom";

export default function Cadatro() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleAcessar = (e) => {
    e.preventDefault();

    if (email !== "" && senha !== "") {
      console.log("nome:" + nome + "\nemail:" + email + "\nsenha:" + senha);
      alert("Cadastrado");
    } else {
      alert("Preencha todos os campos");
    }
  };

  return (
    <div className="area-login">
      <div className="login">
        <div className="login-img">
          <img src={rockstar} />
        </div>

        <form onSubmit={handleAcessar}>
          <input
            type="text"
            placeholder="seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <input
            type="text"
            placeholder="seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <input type="submit" value="entrar"></input>
        </form>
        <h3>
          Já tem uma conta ? <Link to="/">Faça login</Link>
        </h3>
      </div>
    </div>
  );
}
