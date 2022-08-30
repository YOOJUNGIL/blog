import React from 'react';

import './App.css';

import Header from './components/Header';
import Subheader from './components/Subheader';
import Nav from './components/Nav';
import Contents from './components/Contents';
import ContentsTag from './components/ContentsTag';

function App() {
    const headerInfo = {
        title: 'WEB', subTitle: 'world wide web !!!'
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

    let isChidrenDisp = true;
    let dispDiv = false;

    return (
        <div className="App" style={ {width: 300, color: 'black', borderStyle: 'dotted'} }>
            <Header contents={headerInfo}></Header>
            <Subheader desc1="www는 어쩌고 저쩌구..."></Subheader>
            <Nav contents={navInfo}></Nav>
            {/*속성값key=value이지만 key만 있다면 무조건 true인식됨*/}
            <Contents isChidrenDisp={isChidrenDisp} dispDiv>
                <li>First item.</li>
                <li>Second item.</li>
                <li>Another item.</li>
            </Contents>
            <ContentsTag></ContentsTag>
        </div>
    );
}

export default App;