import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';

// [성능개선]
// useMemo      : 특정 결과값을 재사용 할 때 사용
// useCallback  : 특정 함수를 재사용 할 때 사용, 배열에 값들이 최신값으로핸들링됨
// React.memo   : 리랜더링방지에 의한 성능개선

// 활성사용자수
//function countActiveUsers(users){} es5에서 es6 대체문법 적용
const countActiveUsers = (users) => {
    const activeCount = users.filter(user => user.active).length;
    console.log('활성사용자수 카운팅 : ' + activeCount);
    return activeCount;
}

// User컴포넌트(건별추가)
//function User({{user, onRemove, onToggle}}){} es5에서 es6 대체문법 적용
const User = React.memo(({user, onRemove, onToggle}) => {
    // 이벤트(useEffect)가 명확하지 않음
    useEffect(() => {
        console.log('user 값이 설정됨');
        console.log(user);

        return () => {
            console.log('user 가 바뀌기 전..');
            console.log(user);
        };
    }, [user]);

    return (
        <div>
            <span>{user.id}</span>
            <span><b onClick={() => onToggle(user.id)} style={{cursor: 'pointer', color: user.active ? 'green' : 'red'}}>{user.userName}</b></span>
            <span>{user.email}</span>
            {/*function(){onRemove(user.id)} es5 : es6 () => onRemove(user.id)*/}
            <button onClick={() => onRemove(user.id)}>삭제</button>
        </div>
    );
});

// Users컴포넌트
//function Users({{users, onRemove, onToggle}}){} es5에서 es6 대체문법 적용
const Users = ({users, onRemove, onToggle}) => {
    return (
        <div>
            {users.map(user => (
                <User user={user} onRemove={onRemove} onToggle={onToggle} key={user.id}/>
            ))}
        </div>
    );
}

// CreateUser컴포넌트
//function CreateUser({userName, email, onChange, onCreate}){} es5에서 es6 대체문법 적용
const CreateUser = React.memo(({userName, email, onChange, onCreate}) => {
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
});

// contentcrud component
function ContentsCRUD(props) {
    console.log('contentscrud...' + props);

    const [users, setUsers] = useState(props.users);//전체목록json
    const [inputs, setInputs] = useState({userName: '', email: ''});//json
    const {userName, email} = inputs;

    //function onChange(e){} es5에서 es6 대체문법 적용
    const onChange = useCallback((e) => {
        const {name, value} = e.target;
        setInputs({
            ...inputs,
            [name]: value
        });
    }, [inputs]);

    // 추가
    //function onCreate(){} es5에서 es6 대체문법 적용
    const onCreate = useCallback(() => {
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
    }, [users, userName, email]);

    // 삭제
    //function onRemove(id){} es5에서 es6 대체문법 적용
    const onRemove = useCallback((id) => {
        setUsers(users.filter(user => user.id !== id));
    }, [users]);

    // 반전
    //function onToggle(id){} es5에서 es6 대체문법 적용
    const onToggle = useCallback((id) => {
        setUsers(users.map(user => user.id === id ? {...user, active: !user.active} : user));
    }, [users]);

    // id초기값
    const nextId = useRef(4);

    // 활성사용자수
    // 활성 사용자 수를 세는건, users 에 변화가 있을때만 세야되는건데, input 값이 바뀔 때에도 컴포넌트가 리렌더링 되므로 
    // 이렇게 불필요할때에도 호출하여서 자원낭비 방지, useMemo 사용
    //function countActiveUsers() {
    //    return users.filter(user => user.active).length;
    //};
    //const activeCount = countActiveUsers(users);
    const activeCount = useMemo(() => countActiveUsers(users), [users]);

    return (
        <div style={{padding: '5px', backgroundColor: '#e1e0b3'}}>
            <CreateUser userName={userName} email={email} onChange={onChange} onCreate={onCreate}/>
            <Users users={users} onRemove={onRemove} onToggle={onToggle}/>
            <div>활성사용자수 : {activeCount}</div>
        </div>
    );
}

export default React.memo(ContentsCRUD);