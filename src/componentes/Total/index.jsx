import "./style.css"

export const ValorTotal = ({listTransactions}) => {

    let somaValores = listTransactions.reduce((valorAnterior, valorAtual) => {

        if (valorAtual.type === "Entrada"){
            
            return valorAnterior + Number(valorAtual.value)

        } else {

            return valorAnterior - Number(valorAtual.value)

        }
    }, 0);

    return (
        <div className="div_valor_total">
            <div className="valor_total">
                <p>Valor Total:</p>
                <p className="soma_total">$ {Number(somaValores).toFixed(2).replace(".",",")}</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}