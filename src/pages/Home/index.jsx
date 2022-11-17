import './style.css'
import '../../index.css'
import { Button } from "../../componentes/Button"
import { InputNumber, InputText } from "../../componentes/Input"
import { ValorTotal } from "../../componentes/Total"
import { InputSelect } from '../../componentes/Select'
import { Filtro } from '../../componentes/Filtro'
import { Card } from '../../componentes/Card'
import { useState } from 'react'
import { Header } from '../../componentes/Header'

export const Home = ({listTransactions, setListTransactions, isDashboard, setIsDashboard}) => {

    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("")
   

    function handleSubmit (event) {
        event.preventDefault();

        setListTransactions([...listTransactions, {description, value, type}])
        console.log(listTransactions)
        setDescription("")
        setValue("")
        setType("")
    }

    return (
        <>
            <Header setIsDashboard={setIsDashboard} isDashboard={isDashboard}/>
            <div  className='container_home'>
                <div className='div_sections'>
                    <section className='sec_form'>
                        <form onSubmit={(event) => handleSubmit(event)}>
                            <div>
                                <InputText description={description} setDescription={setDescription}/>
                            </div>
                            <div className="div_inputs">
                                <InputNumber value={value} setValue={setValue} />
                                <InputSelect type={type} setType={setType} />
                            </div>
                            <Button type="submit" name="Inserir Valor" />
                        </form>
                    <ValorTotal/>
                    </section>
                <section className='sec_filtro_despesas'>
                        <Filtro />
                        <Card listTransactions={listTransactions} setListTransactions={setListTransactions} />
                </section>
                </div>
            </div>
        </>
    )
}