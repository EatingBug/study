import logo from './logo.svg';
import './App.css';

function App() {

  let post = '강남 우동 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        {/* style 변경시에는 {} 안에 넣어야됨 + 속성명에 - 는 빼기로 인식하므로 붙여야됨 */}
        <h4 style={ {color : 'red', fontSize : '16px'} }>블로그</h4>
      </div>
      {/* react 에서는 중괄호로 변수를 넣을 수 있음 */}
      <h4>{ post }</h4>
    </div>
  );
}

export default App;
