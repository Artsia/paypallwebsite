import './footer.css'
function Footer() {
    let url = 'https://www.google.com';
    return (<footer className="ContantInfo">
        <div><a href={url} target='_blank' rel="noreferrer">Contact Us</a></div>
        <div><a href={url} target='_blank' rel="noreferrer">Privacy</a></div>
        <div><a href={url} target='_blank' rel="noreferrer">Legal</a></div>
        <div><a href={url} target='_blank' rel="noreferrer">Policy</a></div>
        <div><a href={url} target='_blank' rel="noreferrer">Updates</a></div>
        <div><a href={url} target='_blank' rel="noreferrer">WorldWide</a></div>
    </footer>)
}

export default Footer;