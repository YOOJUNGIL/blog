import React from 'react';
import { Route } from 'react-router-dom';

import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Nav from './components/Nav';
import ContentsHome from './components/ContentsHome';
import Contents from './components/Contents';
import ContentsTag from './components/ContentsTag';
import ContentsCRUD from './components/ContentsCRUD';

function App() {
    const headerInfo = {
        title: 'WEB'
            , subTitle: 'world wide web !!!'
    };

    const navInfo = [
        {urlName: '다음'  
            , urlAddress: 'www.daum.net'  
            , urlDesc: 'daum !!! welcome to daum.'},
        {urlName: '네이버'
            , urlAddress: 'www.naver.com' 
            , urlDesc: 'naver !!! welcome to naver.'},
        {urlName: '구글'  
            , urlAddress: 'www.google.com'
            , urlDesc: 'google !!! welcome to google.'}
    ];

    const users = [
        {id: 1, 
            userName: '홍길동', 
            email: 'xcon999@abc.co.kr',
            active: true},
        {id: 2, 
            userName: '이순신', 
            email: 'hanmail@abc.co.kr',
            active: false},
        {id: 3, 
            userName: '대조영', 
            email: 'qbqefa@ebeeef.co.kr',
            active: false}
    ];

    let isChidrenDisp = false;
    let dispDiv = true;

    return (
        <div className="App" style={ {width: 300, color: 'black', borderStyle: 'dotted'} }>
            <Header meta="리액트 테스트 페이지 입니다..." contents={headerInfo}></Header>
            <Subheader desc1="www는 어쩌고 저쩌구..."></Subheader>
            <Nav contents={navInfo}></Nav>
            <ContentsHome />
            <Contents isChidrenDisp={isChidrenDisp} dispDiv>
                <li>First item.</li>
                <li>Second item.</li>
                <li>Another item.</li>
            </Contents>
            <ContentsTag></ContentsTag>
            <ContentsCRUD users={users}></ContentsCRUD>
        </div>
    );
}

export default App;