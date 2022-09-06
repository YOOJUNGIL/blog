// header componant
function Header(props) {
    console.log('header...');
    
    return (
        <header>
            <p>
                {new Date().toLocaleTimeString()}
                <br/>{props.meta}
            </p>
            <h1>{props.contents.title}</h1>
            <p>{props.contents.subTitle}</p>
        </header>
    );
}

export default Header;