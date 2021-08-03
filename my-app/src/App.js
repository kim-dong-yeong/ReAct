import logo from './logo.svg';
import "./App.css";

//0.ReAct 엔진 -데이터변경감지에서 UI그려주는!!
//1.실행과정(index.html)-SPA(SINGGLE PAGE)
//2. JSX문법

// (1) return시에 하나의 Dom만 리턴 가능
// (2) 변수선언은 let 혹은 const로만 해야함
// (3) if문 불가능 삼항연산자 가능
let a =10;
const b =20;

function App(){
return( 
<div> 
  안녕
  <div>sss</div>
</div>
  );
}

export default App;

