// addEventListener 달기
function fnLinks(e) {
    e.preventDefault();

    console.log(e);
    console.log(e.target.id);
    
    let c = document.getElementById('pContents');
    if(e.target.id === 'links0') {
        c.innerHTML = 'daum !!! welcome to daum.';
    }
    else if(e.target.id === 'links1') {
        c.innerHTML = 'naver !!! welcome to naver.';
    }
    else if(e.target.id === 'links2') {
        c.innerHTML = 'google !!! welcome to google.';
    }
}

// 함수이용 dynamicHtml생성
function makeDynamicHtml(props) {
    let html = [];
    let length = props.contents.length;
    for(let i = 0; i < length; ++i) {
        html.push(<li key={i}><a href="#" onClick={function(){ document.getElementById('pContents').innerHTML = props.contents[i].urlDesc }}>{props.contents[i].urlName}</a></li>);
    }
    return html;
}

// nav componant
function Nav(props) {
    console.log('nav...');

    //dynamicHtml생성
    let length = props.contents.length;
    let elements = '';
    if(length > 0) {
        for(let i=0; i<length; ++i) {
          elements += '<li><a href="#" key="' + i + '" id="' + ('links' + i) + '">' + props.contents[i].urlName + '</a></li>';
        }
    }
    else {
        elements = '<li>데이터가 없습니다.</li>';
    }

    return (
        <nav>
            {/*방법1.dynamicHtml(unescape)이용*/}
            <ul onClick={fnLinks} dangerouslySetInnerHTML={{__html: elements}}></ul>

            {/*방법2.함수이용*/}
            <ul>{makeDynamicHtml(props)}</ul>
            
            <div>
                <p id="pContents">welcome to react ...</p>
            </div>
        </nav>
    );
}

export default Nav;