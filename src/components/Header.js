// header componant
function Header(props) {
    console.log('header...');
    
    return (
        <header>
            <h1>{props.contents.title}</h1>
            <p>{props.contents.subTitle}</p>
        </header>
    );
}

export default Header;