import './header.css'
import logo from '../FlagIcons/icons8-paypal-50.png';
import { Button } from '@mui/material';


function Header() {
    return (
        <div className="App-header">

            <div></div>
            <div></div>

            <div className='firstHeaderSection'>
                <div id="ahLogC">
                    <img src={logo} alt='' />
                </div>
                <div><Button className='hmenuBtn' variant='text'
                >Personal</Button></div>

                <div><Button className='hmenuBtn' variant='text'>Bussiness</Button></div>
                <div><Button className='hmenuBtn' variant='text'>Enter</Button></div>

                <div><Button className='hmenuBtn' variant='text'>Developer</Button></div>

            </div>

            <div className='secondHeaderSection'>
                <div><Button variant='text'>Help</Button></div>
                <div><Button className='hLoginBtn' variant='outlined'>Log in</Button></div>
                <div><Button className='hSignUpBtn' variant='contained'>Sign Up</Button></div>
               
            </div>

            <div></div>
            <div></div>

        </div>
    )
}

export default Header;