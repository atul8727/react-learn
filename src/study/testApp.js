import React,{ useState,useMemo,useRef } from "react";
import User from "./User";
import Ref from "./Ref";
import Fref from "./Fref";

function App() {

    const [num, setNum] = useState(0);
    const [item, setItem] = useState(10);
    let [val, sertVal] = useState("");
    let inputRef = useRef(0)

    let callback = useMemo(
        function multiCount() {
            console.log("FDas")
            return num * 5;
        },[num]
    )

    function submitForm(e) {
        e.preventDefault();
        alert(inputRef.current.value)
    }

  return (
    <div className="App">
          <h1>HEllo {num}</h1>
          <h1>HEllo {item}</h1>
          {callback}
          <button onClick={()=>setNum(num+1)}>num</button>
          <button onClick={() => setItem(item * 10)}>item</button>
          <Ref />
          <Fref />
          <h3>Controlled</h3>
          <input type="text " value={val} onChange={(e) => { sertVal(e.target.value) }} />
          <h3>Uncontrolled</h3>
          <form onSubmit={submitForm}>
              <input type="text" name="a" ref={inputRef} />
              <input type="text" name="b" />
              <button>submit</button>
          </form>
          <h3>HOC</h3>
    </div>
  );
}

export default App;
