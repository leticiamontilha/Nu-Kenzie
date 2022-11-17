import './style.css'
import ImagemLixo  from "../../assets/img/trash.png"

export const Card = ({listTransactions, setListTransactions}) => {

    function removeCard (item) {
        let filtro = listTransactions.filter((elem) => elem.description !== item)

        setListTransactions(filtro)

    }

    return (
        <ul>
            {listTransactions.map((elem) => {
                return (
                    <li className={elem.type === "Entrada" ? "verde" : "vermelho" }>
                        <div className='div_1'>
                            <h4>{elem.description}</h4>
                            <p>R$ {Number(elem.value).toFixed(2).replace(".", ",")}</p>
                            <button onClick={() => removeCard(elem.description)}><img src={ImagemLixo} alt="trash" /></button>
                        </div>
                        <p>{elem.type}</p>
                    </li>
                )
            })}
        </ul>
    )
}