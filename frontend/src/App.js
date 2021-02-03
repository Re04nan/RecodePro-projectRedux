import React from "react";
import { useSelector, useDispatch } from "react-redux";

import './styles.css';

export default function App (){
  const [inputFrutas, setInputFrutas] = React.useState("");
  const [inputTitulo, setInputTitulo] = React.useState("")
  const frutas = useSelector((state)=> state.frutasReducer.frutas);
  const titulo = useSelector((state)=> state.tituloReducer.titulo);

  const dispatch = useDispatch();

  function removerFruta(event){
    dispatch({type:"REMOVER", value: event})
  }
  function adicionarFruta(event){
    event.preventDefault();
    const objFruta = {
      nome: inputFrutas
    }
    document.getElementById("campo1").value = "";
    dispatch({type:"ADICIONAR", value: objFruta})
    
  }
  function alterarTitulo (event) {
    setInputTitulo(event.target.value);
    dispatch({type: "ALTERAR", value: event.target.value})
  } 
  return(
    <>
      <main className="container fundo">
        <h1><i className="far fa-file-alt justify-content-center"/> {titulo}</h1>
        <form className="mb-4">
          <input className="form-control-lg-4 titulo" value={inputTitulo}
           onChange={alterarTitulo}
           placeholder="Digite um nome para sua lista de compra..."/>
        </form>
      <form onSubmit={adicionarFruta}>
        <div className="input-group mb-3">
          <input id="campo1" className="form-control-lg-4" value={inputFrutas} 
          onChange={(event)=> setInputFrutas(event.target.value)} 
          placeholder="Digite os itens..."/>
          <div className="input-group-append">
            <button className="btn btn-success"><i className="fas fa-cart-plus"/></button>
          </div>
        </div>
      </form>
        <ol>
          {frutas.map((fruta, index) => {
            return(
              <li key={index}>{fruta.nome}&nbsp;&nbsp;&nbsp;<i onClick={() => removerFruta(index)} className="fas fa-trash-alt"/></li>
            )
          })}
        </ol>
      </main>
    </>
  )
}