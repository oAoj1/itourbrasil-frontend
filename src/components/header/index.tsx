import './Header.css'
import Menu from '../menu'
import LogoITour from '../logoITour'
import { SiYourtraveldottv } from 'react-icons/si'

export default function Header(){
    return(
        <header>
            <LogoITour/>
            <Menu/>
        </header>   
    )
}