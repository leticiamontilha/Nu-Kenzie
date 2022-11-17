import './styles.css'
import '../../../src/index.css'
import NuKenzie from "../../assets/img/NuKenzie(1).png"

export const Header = ({isDashboard, setIsDashboard}) => {
    return (
        <header>
            <div className='container_header'>
                <div>
                    <img src={NuKenzie} alt="logo" />
                </div>
                <div className='div_btn'>
                    <button onClick={() => setIsDashboard(!isDashboard)}>Inicio</button>
                </div>
            </div>
        </header>
    )
}