import React from 'react'
import st from './Listagem.module.css'
import NavBar from '../../components/NavBar/NavBar'

const Listagem = () => {

  const arrayDeAlunos = [['João', 'joao@gmail.com', '(48) 99999999'], 
  ['Maria', 'maria@gmail.com', '(48) 99999999'],
  ['José', 'jose@gmail.com', '(48) 99999999'],['João', 'joao@gmail.com', '(48) 99999999'], 
  ['Maria', 'maria@gmail.com', '(48) 99999999'],
  ['José', 'jose@gmail.com', '(48) 99999999'],]


  
  return (
    <>
        <NavBar />
        <div>Listagem</div>

        <div className={st.conteudo}>
          <div className={st.resultado}>
            <h2>Dados do Formulário:</h2>
            {arrayDeAlunos.length === 0 ? (
              <p>Nenhum dado cadastrado.</p>
            ) : (
              <ul>
                {arrayDeAlunos.map((data, index) => (
                  <li key={index}>
                    <p>----------------------------------------------------------------</p>
                    <p><strong>Nome:</strong> {data[0]}</p>
                    <p><strong>Email:</strong> {data[1]}</p>
                    <p><strong>Telefone:</strong> {data[2]}</p>
                    <p>----------------------------------------------------------------</p>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
    </>
  )
}

export default Listagem