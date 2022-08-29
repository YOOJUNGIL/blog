// header componant
function Header({contents}) {
    console.log('header...');
    
    return (
        <header>
            <h1>{contents.title}</h1>
            <p>{contents.subTitle}</p>
        </header>
    );
}

export default Header;