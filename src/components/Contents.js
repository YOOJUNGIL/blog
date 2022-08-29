import { useState } from 'react';

//컴포넌트(반복되는 덩어리 html, 자주변경되는 html 등)
function Modal({title, date, contents}) {
  return (
    <div className="modal">
      <p><strong>{title}</strong></p>
      <p>{date}</p>
      <p>{contents}</p>
    </div>
  );
}

function Modal2(props) {
    return (
        <div className="modal">
          <p><strong>{props.title}</strong></p>
          <p>{props.date}</p>
          <p>{props.contents}</p>
        </div>
    );
}

// article componant
function Contents() {
    console.log('contents...');

    //변수지정
    let post = '강남 우동 맛집';

    //useState 재랜더링시 사용
    let [글제목] = useState('코드 추천');
    let [글제목들, 글제목들ref] = useState(['제목1', '제목2', '제목3']);
    let [따봉, 따봉ref] = useState(0);

    let num = [1, 2];
    let a = num[0];
    let c = num[1];
    //위와 동격(aa=10, cc=11)
    let [aa, cc] = [10, 11];

    return (
        <article>
          {/*clssName사용*/}
          <div className="black-nav">
            <h4 id={post} className={post}>ReactBlog...</h4>
          </div>

          {/*style설정*/}
          <h4 style={{color: 'green', borderStyle: 'dotted'}}>{post}</h4>     
          
          {/*변수지정*/}
          <div style={{color: 'black', borderStyle: 'dotted'}}>
            <p>{글제목}</p>
            <p>
              <span>{a}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{c}</span>
            </p>
            <p>
              <span>{aa}</span>&nbsp;&nbsp;&nbsp;&nbsp;
              <span>{cc}</span>
            </p>
          </div>

          {/*이벤트지정*/}
          <div style={{color: 'red', borderStyle: 'dotted'}}>
            <p>{글제목들[0]}<span onClick={function(){  따봉ref(따봉+1); }}>👍</span> {따봉}</p>
            <p>{글제목들[1]}</p>
            <p onClick={function(){ 
                //다른 주소값을 가지도록 복제
                let copy글제목들 = [...글제목들];
                copy글제목들[2] = '제목99';
                글제목들ref(copy글제목들);
            }}>{글제목들[2]}</p>
          </div>

          {/*component는 대문자로 시작, 그러면 파라미터는 어떻게 ???*/}
          <Modal title="아름다운 우리강산" date="2020-12-15" contents="우리는 자랑수러운..."/>
          <Modal2 title="우리강산222" date="2020-12-22" contents="우리민족...222"/>
        </article>
    );
}

export default Contents;