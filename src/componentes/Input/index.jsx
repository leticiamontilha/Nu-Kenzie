import './style.css';
import '../../index.css'

export const InputText = ({description, setDescription}) => {
    return (
        <div className='div_input_text'>
            <label htmlFor="descricao">Descrição</label>
            <input  onChange={(event) => setDescription(event.target.value)} value={description} className='input_descricao' id='description' type="text" placeholder='Digite aqui sua descrição'/>
            <p>Ex: Compra de roupas</p>
        </div>
    )

}

export const InputNumber = (props) => {
    return (
        <div className='div_input_valor'>
            <label htmlFor="valor">Valor</label>
            <div className='valor_p'>
                <input onChange={(event) => props.setValue(event.target.value)} value={props.value} id="value" className='input_valor' type="number" placeholder='1'/>
                <p>R$</p>
            </div>
        </div>
    )
}


