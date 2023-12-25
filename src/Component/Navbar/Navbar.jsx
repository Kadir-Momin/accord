import './Navbar.css'

const Navbar = () => {
    return(
        <div className="navbar">
            <div className="logo">
                <img src="/Images/logo.jpg" alt="logo" />
            </div>
            <div className="nav-section">
                <ul className="nav-links">
                    <li className="nav-link">Home</li>
                    <li className="nav-link">Product</li>
                    <li className="nav-link">About</li>
                    <li className="nav-link">Contact</li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar