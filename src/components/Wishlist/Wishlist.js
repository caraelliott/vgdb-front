// import './App.css';
// import Navbar from './components/Navbar/Navbar';
import React, { useState } from "react";


//WISHLIST COMPONETS
function App() {
    const [inputList, setInputList] = useState([{ nameOfGame: "", typeOfConsole: "" }]);

  // handle input change
  const handleInputChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    setInputList(list);
  };

  // handle click event of the Remove button
  const handleRemoveClick = index => {
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { nameOfGame: "", typeOfConsole: "" }]);
  };

  return (
    <div className="App">
      <h1>MY WISH LIST</h1>
      {inputList.map((x, i) => {
        return (
          <div className="box">
            <input
              name="nameOfGame"
              placeholder="Enter Name Of Game"
              value={x.nameOfGame}
              onChange={e => handleInputChange(e, i)}
            />
            <input
              className="ml10"
              name="typeOfConsole"
              placeholder="Enter typeOfConsole"
              value={x.typeOfConsole}
              onChange={e => handleInputChange(e, i)}
            />
            <div className="btn-box">
              {inputList.length !== 1 && <button
                className="mr10"
                onClick={() => handleRemoveClick(i)}>Remove</button>}
              {inputList.length - 1 === i && <button onClick={handleAddClick}>Add</button>}
            </div>
          </div>
        );
      })}
      {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
    </div>
  );
}

export default App;