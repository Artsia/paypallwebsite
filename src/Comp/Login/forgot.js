import Footer from '../Footer/footer'
import './forgot.css'
import logo from '.././FlagIcons/icons8-paypal-50.png'
import { Button, TextField } from '@mui/material'



function ForgotEmail() {
    let url = 'https://www.google.com'
    return (
        <div className='bodyArtf'>
            <div className='ForgotEmailContainerCenter'>
                <div className='ForgotEmailContainer'>

                    <div className='feLogoC'>
                        <img src={logo} alt=' ' />
                    </div>
                    <div className='feHeaderC'>
                        <h2>Forgot the email you use for PayPal?</h2>
                    </div>
                    <div className='feParaC'>
                        <p>Enter up to 3 email addresses you may
                            have used to create your PayPal account.
                            We’ll check to find a match.</p>
                    </div>
                    <div className='fetxtFieledC'>
                        <TextField variant='outlined'
                            placeholder='Email 1'
                            className='fetxtFieldT'
                        />
                    </div>
                    <div className='fetxtFieledC'>
                        <TextField variant='outlined'
                            placeholder='Email 2'
                            className='fetxtFieldT'
                        />
                    </div>
                    <div className='fetxtFieledC'>
                        <TextField variant='outlined'
                            placeholder='Email 2'
                            className='fetxtFieldT' />
                    </div>
                    <div className='feBtnC'>
                        <Button variant='contained'
                        className='feBtnT'>Next</Button>
                    </div>
                    
                    <div className='txtRemC'>
                        <a href={url} target='_blank'  rel="noreferrer" >I've remembered my email</a>
                    </div>

                </div>

            </div>

            <div id='footerT'>
                <Footer />
            </div>

        </div>
    )
}

export default ForgotEmail;