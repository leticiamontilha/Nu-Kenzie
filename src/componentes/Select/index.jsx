import '../Input/style.css'

export const InputSelect = (props) => {
    return (
        <div className='div_input_select'>
            <label htmlFor="valor">Tipo de Valor</label>
            <select onChange={(event) => props.setType(event.target.value)} required value={props.type} className='input_select' name="" id="type">
              <option value="">Selecione tipo</option>
                <option value="Entrada">Entrada</option>
                <option value="Saída">Saida</option>
            </select>
        </div>
    )
}