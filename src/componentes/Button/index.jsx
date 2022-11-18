import './style.css'

export const Button = ({name, isDashboard, setIsDashboard}) => {
    return (
        <button onClick={() => setIsDashboard(!isDashboard)} className="button">{name}</button>
    )
}

export const ButtonFiltro = ({name}) => {

    return (
        <button className="button_filtro">{name}</button>
    )
}

