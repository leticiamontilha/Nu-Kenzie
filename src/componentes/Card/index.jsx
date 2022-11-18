import './style.css'
import ImagemLixo  from "../../assets/img/trash.png"
import NoCard  from "../../assets/img/NoCard.svg"

export const Card = ({listTransactions, setListTransactions}) => {

    function removeCard (item) {
        let filtro = listTransactions.filter((elem) => elem.description !== item)

        setListTransactions(filtro)
    }

    return (
        <ul>
            { listTransactions.length === 0 ? (
                <div>
                    <h2>Você ainda não possui nenhum lançamento</h2>
                    <img src={NoCard} alt="Não possui lançamento" />
                </div>
            ) : (<div>{listTransactions.map((elem) => {
                    return (
                        <li className={elem.type === "Entrada" ? "verde" : "cinza" }>
                            <div className='div_1'>
                                <h4>{elem.description}</h4>
                                <p>R$ {Number(elem.value).toFixed(2).replace(".", ",")}</p>
                                <button onClick={() => removeCard(elem.description)}><img src={ImagemLixo} alt="trash" /></button>
                            </div>
                            <p>{elem.type}</p>
                        </li>
                    )})} 
                </div>)}
        </ul>
    )
}


