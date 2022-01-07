const Header = ({title}) => {
    return (
        <header>
            <h1 className="header1">{title}</h1>
        </header>
    )
}

// Set default title
Header.defaultProps = {
    title : "Default Title"
}
export default Header
