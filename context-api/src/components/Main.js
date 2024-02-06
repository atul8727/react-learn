import { useContext } from 'react';
import { CommonContext } from './CommonContext';

function Main(props) {
const { text, setText,text2} = useContext(CommonContext);
        return (
            <div>
              <h1>{text}{text2}</h1>
              <button onClick={() => setText('Hello, world!')}>
                Click me
              </button>
            </div>
        );
    }

export default Main;
