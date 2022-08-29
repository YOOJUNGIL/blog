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

// nav componant
function Nav({contents}) {
    console.log('nav...');

    let length = contents.length;
    let elements = '';
    if(length > 0) {
        for(let i=0; i<length; ++i) {
          elements += '<li><a href="#" id="' + ('links' + i) + '">' + contents[i].urlName + '</a></li>';
        }
    }
    else {
        elements = '<li>데이터가 없습니다.</li>';
    }

    return (
        <nav>
            {/*unescape:string을 html인식시키기*/}
            <ul onClick={fnLinks} dangerouslySetInnerHTML={{__html: elements}}></ul>
            <div>
                <p id="pContents">welcome to react ...</p>
            </div>
        </nav>
    );
}

export default Nav;