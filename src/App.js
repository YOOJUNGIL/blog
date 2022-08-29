import './App.css';

import Header from './components/Header';
import Nav from './components/Nav';
import Contents from './components/Contents';

function App() {
    const headerInfo = {
        title: 'WEB', subTitle: 'world wide web !!!'
    };
    const navInfo = [
        {urlName: '다음'  , urlAddress: 'www.daum.net'},
        {urlName: '네이버', urlAddress: 'www.naver.com'},
        {urlName: '구글'  , urlAddress: 'www.google.com'}
    ];
    return (
        <div className="App" style={ {width: 250, color: 'black', borderStyle: 'dotted'} }>
          <Header contents={headerInfo}></Header>
          <Nav contents={navInfo}></Nav>
          <Contents></Contents> 
        </div>
    );
}

export default App;