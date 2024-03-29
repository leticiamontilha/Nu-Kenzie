import './styles.css'
import { Button } from '../../componentes/Button';
import NuKenzie from "../../assets/img/NuKenzie.png"
import imgIlustration from "../../assets/img/illustration.svg"


export const Dashboard = ({setIsDashboard, isDashboard}) => {
    return (
        <main>
            <div className='div_itens'>
                <section className="sec_dir">
                    <img src={NuKenzie} alt="logo" />
                    <h2>Centralize o controle das suas finanças</h2>
                    <p>de forma rápida e segura</p>
                    <Button setIsDashboard={setIsDashboard} isDashboard={isDashboard} name="Iniciar" />
                </section>
                <section className="sec_esq">
                    <img src={imgIlustration} alt="ilustação" />
                    </section>
            </div>
        </main>
    );
}



