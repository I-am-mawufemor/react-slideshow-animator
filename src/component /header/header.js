import './header.css'
function Header(){
return(
    <div className="header">
        <div className="nav-img">
            <img src="../logo.jpeg" alt="logo"/>
        </div>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">Service</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
        </nav>
    </div>
)
}export default Header;