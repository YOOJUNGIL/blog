import React, { useState } from 'react';

//컴포넌트(반복되는 덩어리 html, 자주변경되는 html 등등)
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
function Contents(props) {
    console.log('contents....');

    //변수
    let post = '강남 우동 맛집';

    //state 이용한 재랜더링
    let [글제목] = useState('코드 추천');
    let [글제목들, 글제목들ref] = useState(['제목1', '제목2', '제목3']);//다차원배열

    //첫번째(현재값),두번째(setter)
    let [recom, setRecom] = useState(0);//일차원배열

    //배열
    let num = [1, 2];
    let a = num[0];
    let c = num[1];
    //배열[위와 동격(aa=10, cc=11)]
    let [aa, cc] = [10, 11];

    return (
        <div>
            <b>{props.dispDiv ? 'dispDiv=true' : 'dispDiv=false'}</b>

            {/*삼항식 : children엘리먼트표시여부*/}
            {props.isChidrenDisp 
              ?
                  <article>
                      {/*내부 엘리먼트 모두 표시*/}
                      <ul>{props.children}</ul>
                  </article>
              : 
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

                      {/*이벤트실행*/}
                      <div style={{color: 'red', borderStyle: 'dotted'}}>
                          <p>
                              {글제목들[0]}
                              <span onClick={function(){ setRecom(recom+1); }}>👍</span>
                              <span onClick={function(){ setRecom(recom-1); }}>👎</span>
                              &nbsp;
                              {recom}
                          </p>
                          <p>{글제목들[1]}</p>
                          <p onClick={function(){ 
                              //다른 주소값을 가지도록 복제
                              let copy글제목들 = [...글제목들];
                              copy글제목들[2] = '제목99';
                              글제목들ref(copy글제목들);
                          }}>{글제목들[2]}</p>
                      </div>

                      {/*component는 대문자로 시작*/}
                      <Modal title="아름다운 우리강산" date="2020-12-15" contents="우리는 자랑수러운..."/>
                      <Modal2 title="우리강산222" date="2020-12-22" contents="우리민족...222"/>
                  </article>
            }
        </div>
    );
}

export default Contents;