import './styles/index.css';
import {useState, useEffect} from 'react';



function App() {
  const [passcode, setPassCode] = useState("1234");
  const [input, setInput] = useState('');
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

  const handleNumberClick = (number) => {
   if (input === 'Try again' || input === 'Welcome') {
      setInput('');
    }
    setInput((prevInput) => prevInput + number.toString());
  };

  const handleSubmit = () => {
    if (input === passcode) {
      setInput('Welcome');
    } else {
      setInput('Try again');
    }
  }
  useEffect(() => {
    if (input.length === 4) {
      handleSubmit();
    }
  }, [input]);

  return (
    <main>
      <div className="centralDiv">
        <div className="divBg">
          <div className="passcode">
            <form>
              <input type="text" className="output" placeholder="Pass Code" name="output"
               value={input} readOnly></input>
            </form>
            <div className="numDiv">
              {numbers.map((number, index) => (
                <div key={index} className="number" onClick={() => handleNumberClick(number)}>
                  {number}
                </div>
              ))};
            </div>
          </div>
        </div>
      </div>


    </main>
  );
}

export default App;
