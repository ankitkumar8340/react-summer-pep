

const Navbar = ({name}) =>{

    return(
        <>
        <nav className="h1Design">
            <ul className="ulNav">
                <span >
                <li className="text-black">Welcome {name}</li>
                </span>
                <li className="navItems">About</li>
                <li className="navItems">Contact</li>
                <li className="navItems">Home</li>
                <li className="navItems">Carrer</li>
                <li className="navItems">Products</li>
            </ul>
        </nav>
        
        </>
    )
}

export default Navbar;