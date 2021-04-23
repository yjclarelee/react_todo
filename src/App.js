import React, { useState } from "react";
import List from './List';
import "./App.css";

function App() {
  const [dataId, setDataId] = useState(0);
  const [item, setItem] = useState({ id: "", content: "", isValid: true });
  const [dataList, setDataList] = useState([]);

  const handleInput = (e) => {
    setItem({ ...item, id: dataId, content: e.target.value });
    setDataId((dataId) => dataId + 1);
  }

  const handleEnter = (e) => {
    if (e.key === 'Enter') {
      setDataList([...dataList, item]);
      setItem({ id: "", content: "", isValid: true });
    }
  }

  const removeList = id => {
    let newDataList = dataList.filter(list => list.id !== id);
    setDataList(newDataList);
  }

  const strikeThrough = id => {
    let newDataList = dataList.map(list => {
      if (list.id === id) list.isValid = !list.isValid;
      return list;
    })
    setDataList(newDataList);
  }

	return (
		<>
			<header>
				<h1>Todo List</h1>
        <div className="input-fields">
					<input
						type="text"
						placeholder="Enter your todo"
            className="text-field"
            onInput={handleInput}
            onKeyDown={handleEnter}
            value={item.content}
					/>
				</div>
			</header>
			<main>
        <div className="list">
          <ul>
            <List dataList={dataList} removeList={removeList} strikeThrough={strikeThrough}/>
          </ul>
        </div>
			</main>
		</>
	);
}

export default App;
