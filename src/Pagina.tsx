import { useState  } from "react"
interface ProdutosState{
    id:number,
    nome:string,
    preco:number,
    categoria:string

}
function Pagina(){
    const[produtos, setProdutos] = useState<ProdutosState[]>([
        {
            id:1,
            nome:"veja",
            preco:20,
            categoria:"limpeza"
        }
    ])
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
                
                    {/*colocar chaves para virar javascripr*/}
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
                <label >id:</label>
                <input type="text" name="id" id="id"/>

                <label >Nome:</label>
                <input type="text" name="nome" id="nome"/>

                <label >preço:</label>
                <input type="text" name="preco" id="preco"/>

                <label >categoria:</label>
                <input type="text" name="categoria" id="categoria"/>

                <input type="submit" value="cadastrar"/>
               


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