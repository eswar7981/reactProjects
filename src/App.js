import React, { useState, useCallback, useMemo } from 'react';

import './App.css';
import DemoList from './components/Demo/DemoList';
import Button from './components/UI/Button/Button';

function App() {
  const [listTitle, setListTitle] = useState('My List');
  const [order,setOrder]=useState('ascending')

  const changeTitleHandler = useCallback(() => {
    setListTitle('New Title');
  }, []);

  const listItems = useMemo(() => [5, 3, 1, 10, 9], []);


  const orderHandler=()=>{
    if(order==='ascending'){
      setOrder('descending')

    }
    else{
      setOrder('ascending')
    }
  }

  return (
    <div className="app">
       <Button onClick={orderHandler} value={order}  title={listTitle} items={listItems}></Button>
      

  
    </div>
  );
}

export default App;
