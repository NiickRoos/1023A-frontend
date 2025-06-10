
//componente é um função que retorna jsx 

import { useState, type ChangeEvent } from "react"

//import type { Container } from "react-dom/client"

/*react  voce tem estados de componentes e quando voce atualiza esses estados ele renderiza denovo, ele faz isso automaticamente
*/
//States ---> são coisas que mudam na tela e ao usar o setstates ele muda na tela, ele renderiza na tela só o necessario
// o so necessario
//Props  ---> são informações que voce pode passar para um componente 
//Hooks -->iniciam com "use", só pode usar ele no começo do componente, ele devolve 

//antes os componetes eram feitos de classes
/*import react from  "react"
class Header extends react.Component{
  render(): react.ReactNode {
     return <h1>Header</h1>

  }
}*/

interface ContainerProps{
  nome:string
}
function Container(props:ContainerProps){
  const [texto, setTexto] = useState("coloque o valor")
  function trataInput(event:React.ChangeEvent<HTMLInputElement>){
   console.log(event.currentTarget.value)
   setTexto(event.currentTarget.value)
  }
  return (
  <>

     <h1>{props.nome}</h1>
     Texto:{texto}
     <input type="text" placeholder="mostrar texto" onChange={trataInput}/>

  </>
  )

}
export default Container