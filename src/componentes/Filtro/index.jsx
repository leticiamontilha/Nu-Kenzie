import "./style.css"
import { ButtonFiltro } from "../Button"

export const Filtro = () => {

    return (
        <div className="div_filtro">
            <p>Resumo financeiro</p>
            <div className="div_buttons">
               <ButtonFiltro name="Todos" />
               <ButtonFiltro name="Entradas" />
               <ButtonFiltro name="Despesas" />
            </div>
        </div>
    )
}