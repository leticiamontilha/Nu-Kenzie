import "./style.css"

export const ValorTotal = () => {

    return (
        <div className="div_valor_total">
            <div className="valor_total">
                <p>Valor Total:</p>
                <p className="soma_total">$ 800</p>
            </div>
            <p>O valor se refere ao saldo</p>
        </div>
    )
}