import React, { useState, useRef } from 'react';

// Input컴포넌트(input tag추가)
function Input() {
    let [descConts, setDescConts] = useState('');//변수

    const [nameConts, setNameConts] = useState({name: '', nickName: ''});//json
    const {name, nickName} = nameConts;
    const nameInput = useRef();

    // 함수내의 함수로 입력내용 복제하기
    function settingDescConts(e) {
        setDescConts(e.target.value);
    };

    // 함수내의 함수로 입력내용 초기화하기
    function initDescConts(e) {
        //같은 state에 의해 동시 초기화됨
        setDescConts('');
    };

    // json 입력내용 복제하기
    function settingNameConts(e) {
        const {value, name} = e.target;
        setNameConts({
            ...nameConts,
            [name]: value
        });
    };

    // json 입력내용 초기화하기
    function initNameConts(e) {
        setNameConts({
            name: '',
            nickName: ''
        });

        // 현재의 포커스를 nameInput이라는 ref로 옮긴다.
        nameInput.current.focus();
    };

    return (
        <div style={{padding: '5px', backgroundColor: '#0000ff0f'}}>
            설명을 기입하세요.<br/>
            <input type="text" style={{width:'100px', height:'17px', fontSize:'30'}} 
                onChange={settingDescConts} placeholder="설명입력하세요" value={descConts}/>
            <button onClick={initDescConts}>초기화</button>
            <div>설명내용 : {descConts}</div>
            
            <br/>

            <input type="text" name="name" style={{width:'100px', height:'19px', fontSize:'30'}} 
                onChange={settingNameConts} placeholder="이름입력하세요" value={name} 
                ref={nameInput}/>
            <input type="text" name="nickName" style={{width:'100px', height:'19px', fontSize:'30'}} 
                onChange={settingNameConts} placeholder="별명입력하세요" value={nickName}/>
            <button onClick={initNameConts}>초기화</button>
            <div>이름(별명) : {name} ({nickName})</div>
        </div>
    );
}

// User컴포넌트(건별tag추가)
function User({user}) {
    return (
        <div>
            <span>{user.id}</span>
            <span>{user.userName}</span>
            <span>{user.email}</span>
        </div>
    );
}

// Users컴포넌트(목록조회tag추가)
function Users() {
    const users = [
        {id: 1, 
            userName: '홍길동', 
            email: 'xcon999@abc.co.kr'},
        {id: 2, 
            userName: '이순신', 
            email: 'hanmail@abc.co.kr'},
        {id: 3, 
            userName: '대조영', 
            email: 'qbqefa@ebeeef.co.kr'}
    ];

    return (
        <div style={ {padding: '5px', backgroundColor: '#cad9de'} }>
            {/*1.전체for순회방식에 의한 추가*/}
            {forUsers(users)}

            <br/>

            {/*2.전체foreach순회방식에 의한 추가*/}
            {mapUsers(users)}

            <br/>

            {/*3.건별Component에 의한 추가*/}
            {users.map(user => (
                <User user={user} key={user.id}/>
            ))}
        </div>
    );
}

// 전체순회에 의한 추가
function forUsers(users) {
    let html = [];
    for(let i = 0; i < users.length; ++i) {
        html.push(<div key={i}>{users[i].id}<span></span><span>{users[i].userName}</span><span>{users[i].email}</span></div>);
    }
    return html;
}

// 전체순회에 의한 추가
function mapUsers(users) {
    let html = [];
    users.forEach(function(user){
        html.push(<div key={user.id}>{user.id}<span></span><span>{user.userName}</span><span>{user.email}</span></div>);
    });
    return html;
}

// contentstag component
function ContentsTag(props) {
    console.log('contentstag...');

    return (
        <div>
            <Input/>
            <Users/>
        </div>
    );
}

export default React.memo(ContentsTag);