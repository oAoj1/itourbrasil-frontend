import './Header.css'
import Menu from './menu'
import { SiYourtraveldottv, SiConvertio } from 'react-icons/si'

export default function Header(){
    return(
        <header>
            <div className="logoHeader">
                <h2> 
                    <span>IT</span>
                    <span>our</span> 
                </h2>
                <SiYourtraveldottv/>
                <h2>Brasil</h2>
            </div>
            <Menu/>
        </header>   
    )
}