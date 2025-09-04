import { useState } from "react"
import Header from "./components/Header"
import Resultado from "./components/Resultado"
// import './css/estilo.css'

function App() {

  // HOOK - useState - Manipula o estado da variável
  const[altura, setAltura] = useState();
  const[peso, setPeso] = useState();
  const[resultado, setResultado] = useState();
  const[mostrarResultado, setMostrarResultado] = useState();

  //CRIANDO A FUNÇÃO CALCULAR IMC
  const calcularIMC=(e)=>{
    e.preventDefault(); //evita o recarregamento da página
    if (altura > 0 && peso > 0){
      const imc = peso / (altura * altura);
      setResultado(imc.toFixed(2)); //arredonda para 2 casas decimais
      setMostrarResultado(true);
    } else {
      alert("Por favor digite valores válidos")
      setMostrarResultado(false);
    }
  }

  return (
    <div className="container">
      <Header/>
      <div className="box">
        <div className="apresentacao">
          <h2>
            O Índice de Massa Corporal (IMC) é uma medida que relaciona o peso e a altura de uma pessoa. Ele é utilizado para indicar se o peso está dentro do recomendado para a saúde, ajudando a identificar situações de baixo peso, sobrepeso ou obesidade.
          </h2>
          <h2>
            Apesar de ser uma ferramenta prática, o IMC é apenas um indicativo e não substitui a avaliação feita por um profissional de saúde.
          </h2>
        </div>

        <form>
          <h1>Descubra se está no peso ideal!</h1>
          <div>
            <label htmlFor="altura"><span>Altura(m):</span></label>
            <input 
              type="number"
              id="altura"
              placeholder="Digite sua altura"
              value={altura}
              onChange={(e) => setAltura(parseFloat(e.target.value))}
            />
          </div>

          <div>
            <label htmlFor="peso"><span>Peso(kg):</span></label>
            <input 
              type="number"
              id="peso"
              placeholder="Digite seu peso"
              value={peso}
              onChange={(e) => setPeso(parseFloat(e.target.value))}
            />
          </div>

          <button onClick={calcularIMC}>Calcular</button>
          
          {mostrarResultado &&(
            <Resultado resultado={resultado}/>
          )}  
        </form>

      </div>
    </div>
  )
}

export default App
