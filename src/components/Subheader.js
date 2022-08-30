// subheader componant
function Subheader(props) {
    console.log('subheader...');
    
    return (
        <div>
            {props.desc1} 
            <br />
            {props.desc2}
        </div>
    );
}

// props 기본값 셋팅
Subheader.defaultProps = {
    desc1: '메인설명없음',
    desc2: '서브설명없음'
}

export default Subheader;