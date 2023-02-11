import ForgotEmailPage from './forgot'
// eslint-disable-next-line 
import { Card, Button, TextField, Avatar } from '@mui/material'
import Footer from '../Footer/footer'
import usaFlag from '../FlagIcons/icons8-usa-25.png'
import logo from '../FlagIcons/icons8-paypal-50.png'
import CustomizedMenus from './LanguageList'
import './login.css'


function Login() {

    let url = 'https://www.google.com';

    return (

        <div className='centerLogin'>

            <Card className="mainContainer"


            >

                <div className="logo">

                    <img src={logo} alt='' />

                    {/**<image src='../../Assets/FlagIcons/icons8-paypal-50.png' />*/}
                </div>

                <div className="email">

                    <TextField variant="outlined"
                        placeholder="Email or mobile number"
                        required
                        className='txtField'
                    />

                </div>

                <div className="forgotEmail">
                    <a href={ForgotEmailPage} className="eLink">Forgot email?</a>
                </div>

                <div className="Btn">
                    <Button
                        variant="contained"
                        className="blueNextBtn"

                    >Next</Button>
                </div>

                <div className="Divider">
                    <div className="emptyDivwithBorder"></div>
                    or
                    <div className="emptyDivwithBorder"></div>
                </div>


                <div className="Btn">
                    <Button
                        variant="outlined"
                        className="bluSignBtn"
                    >SignIn</Button>
                </div>



                <div className='languageContainer'>
                    <img src={usaFlag} alt='' />
                    {/**<Button>v</Button>**/}
                    <CustomizedMenus />
                    <div><a href={url} target='_blank' rel="noreferrer">English</a></div>
                    <div><a href={url} target='_blank' rel="noreferrer">Frecaius</a></div>
                    <div><a href={url} target='_blank' rel="noreferrer">Espanol</a></div>
                    <div><a href={url} target='_blank' rel="noreferrer">中文</a></div>
                </div>


            </Card>

            <div id="lFooter">
                <Footer />
            </div>


        </div>














    )



}









export default Login;