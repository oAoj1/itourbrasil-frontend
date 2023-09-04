import './Menu.css'
import { useState } from 'react'
import { SiConvertio } from 'react-icons/si'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { BsFillHouseDoorFill } from 'react-icons/bs'
import { GiBrazil } from 'react-icons/gi'
import { RiReservedFill } from 'react-icons/ri'
import { FaBook, FaRoute, FaComments } from 'react-icons/fa'
import { FiHelpCircle } from 'react-icons/fi'

export default function Menu(){

    const [isOpen,setIsOpen] = useState<boolean>(false)

    const abrirMenu = () => {
        setIsOpen(!isOpen)
    }

    const menuHeader = [
        {
            opcao:'inicio',
            icon:<BsFillHouseDoorFill/>
        },
        {
            opcao:'descubra o Brasil',
            icon:<GiBrazil/>
        },
        {
            opcao:'reservas',
            icon:<RiReservedFill/>
        },
        {
            opcao:'experiências',
            icon:<FaBook/>
        },
        {
            opcao:'crie seu roteiro',
            icon:<FaRoute/>
        },
        {
            opcao:'conversão de moeda',
            icon:<SiConvertio/>
        },
        {
            opcao:'comentarios',
            icon:<FaComments/>
        },
        {
            opcao:'dicas',
            icon:<FiHelpCircle/>
        }
    ]

    return(
        <div className='optionHeader'>
            <div className="logarRegistrarHeader">
                <button>Registrar-se</button>
                <button>Logar-se</button>
            </div>
            <div className='menuContainer'>
                <AiOutlineMenu onClick={abrirMenu} className='abrirMenuIcon'/>

                <ul className={`menuHeader${isOpen ? 'Open' : ''}`}>

                    <div className="iconsContainer">
                        <AiOutlineClose className='fecharMenuIcon' onClick={abrirMenu}/>
                    </div>

                    {menuHeader.map((opcoes:any|string) => (
                        <li key={opcoes}>
                            <button>
                                <span>{opcoes.icon}</span>
                                <h2>{opcoes.opcao}</h2>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}