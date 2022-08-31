import React, { useState, useRef } from 'react';

// User컴포넌트(건별추가)
function User({user, onRemove}) {
    return (
        <div>
            <span>{user.id}</span>
            <span>{user.userName}</span>
            <span>{user.email}</span>
            {/*function(){onRemove(user.id)} es5 : es6 () => onRemove(user.id)*/}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
}

// Users컴포넌트
function Users({users, onRemove}) {
    return (
        <div>
            {users.map(user => (
                <User user={user} onRemove={onRemove} key={user.id}/>
            ))}
        </div>
    );
}

// create컴포넌트
function CreateUser({userName, email, onChange, onCreate}) {
    return (
        <div>
            <input type="text" name="userName" style={{width:'100px', height:'19px', fontSize:'30'}} 
                placeholder="이름입력하세요"
                value={userName}
                onChange={onChange}/>
            <input type="text" name="email" style={{width:'100px', height:'19px', fontSize:'30'}} 
                placeholder="이메일입력하세요"
                value={email}
                onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
        </div>
    );
}

// contentcrud component
function ContentsCRUD(props) {
    console.log('contentscrud...' + props);

    const [users, setUsers] = useState(props.users);//전체목록json
    const [inputs, setInputs] = useState({userName: '', email: ''});//json
    const {userName, email} = inputs;

    //function onChange(e){} es5에서 es6 대체문법 적용
    const onChange = (e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    };

    // 추가
    //function onCreate(){} es5에서 es6 대체문법 적용
    const onCreate = () => {
        const user = {
            id: nextId.current,
            userName: userName,     //만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜줄수 있으므로 생략 가능(es6 문법), onChange에의해값이 이미 세팅되어져 있음
            email: email            //만약에 key 이름으로 선언된 값이 존재하다면, 바로 매칭시켜줄수 있으므로 생략 가능(es6 문법), onChange에의해값이 이미 세팅되어져 있음
        };

        //setUsers([...users, user]);//재랜더링, 아래로도 가능
        setUsers(users.concat(user));

        // 초기화
        setInputs({
            userName: '',
            email: ''
        });

        // id 등록될때마다 1증가
        nextId.current += 1;
    };

    // 삭제
    //function onRemove(id){} es5에서 es6 대체문법 적용
    const onRemove = (id) => {
        setUsers(users.filter(user => user.id !== id));
    };

    // id초기값
    const nextId = useRef(4);

    return (
        <div style={{padding: '5px', backgroundColor: '#e1e0b3'}}>
            <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate}/>
            <Users users={users} onRemove={onRemove}/>
        </div>
    );
}

export default ContentsCRUD;