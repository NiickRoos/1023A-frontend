import { useState  } from "react"
interface ProdutosState{
    id:number,
    nome:string,
    preco:number,
    categoria:string

}
function Pagina(){
    const [id, setId ] = useState("")
    const [nome, setNome ] = useState("")
    const [categoria, setCategoria ] = useState("")
    const [preco, setPreco ] = useState("")
    const[produtos, setProdutos] = useState<ProdutosState[]>([
        {
            id:1,
            nome:"veja",
            preco:8,
            categoria:"limpeza"
        }
    ])


    function TrataCadastro(event: React.FormEvent<HTMLFormElement> ){
       event.preventDefault();
       //cria um novo produto
       const novoProduto:ProdutosState =  {
          id:parseInt(id),
          nome:nome,
          preco:parseFloat(preco),
          categoria:categoria
       }
       

       //Adicionar esse novo produto no vetor/Array de produtos 
    }
    function trataid(event:React.ChangeEvent<HTMLInputElement>){
        setId(event.target.value)
    }
    function tratanome(event:React.ChangeEvent<HTMLInputElement>){
        setNome(event.target.value)
    }
    function tratacategoria(event:React.ChangeEvent<HTMLInputElement>){
        setCategoria(event.target.value)
    }
    function tratapreco(event:React.ChangeEvent<HTMLInputElement>){
        setPreco(event.target.value)
    }
    


     return(
        <>
        <header>
            <div>Logo</div>
            <nav>
                <ul>
                    <li>
                        <a href="">Home</a>
                    </li>
                    <li>
                    
                        <a href="">Home</a>
                    </li>
                    <li>
                    
                        <a href="">Home</a>
                    </li>
                </ul>
            </nav>
        </header>

        <main>
            <h1> Bem vindo(a) ao meu site de cadrastro e listagem</h1>

            <div className="container-listagem"> 
                
                    {/*colocar chaves para virar javascript*/}
                    <h2>Lista de componentes cadastrados</h2>
                {produtos.map(produto=>{
                    return(
                        <div className="produto-container">
                            <div className="produto-nome">
                                {produto.nome}
                            </div>

                            <div className="produto-preco">
                                {produto.preco}
                            </div>

                            <div className="produto-cetegoria ">
                                {produto.categoria}
                            </div>

                            
                        </div>
                    )
                 })}

            </div>
            <div className="container-cadastro">
                <h2>Cadastre suas informações</h2>
                <form onSubmit={TrataCadastro}>
                <label>id</label>
                <input type="text" name="id" id="id" onChange={trataid}/>
              
                <input type="text" name="nome" id="nome" onChange={tratanome}/>
                <input type="text" name="preco" id="preco" onChange={tratapreco}/>
                <input type="text" name="categoria" id="categoria" onChange={tratacategoria}/>
                <input type="submit" value="cadastrar" />
                 
                </form>
        


            </div>
        </main>
        <footer>

            Para mais informações entre em contato com a gente.
            <li>90028922</li>
            <li>facebook</li>
            <li>Instagram</li>

        </footer>
        </>
     )
}
export default Pagina