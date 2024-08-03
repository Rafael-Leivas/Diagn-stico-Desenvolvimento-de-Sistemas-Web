import React, { useState, useEffect } from 'react';
import NavBar from '../../components/NavBar/NavBar';
import st from './Cadastro.module.css';

const Cadastro = () => {
  const [formDataList, setFormDataList] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    
    const form = event.target;
    const data = new FormData(form);
    const values = Object.fromEntries(data.entries());

    setFormDataList((prevList) => [...prevList, values]);
    
    form.reset();
  };

  useEffect(() => {
    console.log('Dados do formulário atualizados:', formDataList);
  }, [formDataList]);

  return (
    <>
      <NavBar />
    <div className={st.conteudo}>
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" id="nome" />
        
        <label htmlFor="email">Email:</label>
        <input type="email" name="email" id="email" />
        
        <label htmlFor="telefone">Telefone:</label>
        <input type="text" name="telefone" id="telefone" />
        
        <button type="submit">Cadastrar</button>
      </form>

      <div className={st.resultado}>
        <h2>Dados do Formulário:</h2>
        {formDataList.length === 0 ? (
          <p>Nenhum dado cadastrado.</p>
        ) : (
          <ul>
            {formDataList.map((data, index) => (
              <li key={index}>
                <p>----------------------------------------------------------------</p>
                <p><strong>Nome:</strong> {data.nome}</p>
                <p><strong>Email:</strong> {data.email}</p>
                <p><strong>Telefone:</strong> {data.telefone}</p>
                <p>----------------------------------------------------------------</p>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
    </>
  );
}

export default Cadastro;
