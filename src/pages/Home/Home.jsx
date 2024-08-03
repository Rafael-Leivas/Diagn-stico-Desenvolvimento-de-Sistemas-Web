import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import st from './Home.module.css'

const Home = () => {
  const [count, setCount] = React.useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  React.useEffect(() => {
    console.log('O valor de count foi atualizado:', count);
  }, [count]);

  return (
    <>
        <NavBar />
        <div className={st.textos}>
          <h1>Esta é a página Home</h1>
          <p>Navegue para a tela de <span>Cadastro</span> para efetuar o cadastro de novos alunos</p>
          <p>Para visualizar uma listagem de Alunos cadastrados va para a tela <span>Listagem</span></p>
          <div className={st.contador}>
            <button className={st.botaoContador} type="button" onClick={handleClick}>Somar +1</button>
            <p>Contador: {count}</p>
          </div>
        </div>
    </>
  )
}

export default Home