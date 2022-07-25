import { useState } from 'react';
import './App.css';
import List from './List';
function App() {

  const [text, setText] = useState('')
  const [items, setItems] = useState([])

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (text) {
      const item = { id: new Date().getTime().toString(), title: text }
      setItems([...items, item])
      setText('')
    }
  }

  return <>
    <section className='main-div'>
      <h2 className='heading'>TO-DO LIST</h2>
      <div>
        <form onSubmit={onHandleSubmit}>
          <input
            className='input'
            onChange={(e) => setText(e.target.value)}
            placeholder='e.g. buy eggs'
            type='text'
            value={text}
          />
          <button
            type='submit'
            className='btn'
          >Add item</button>
        </form>
        <br></br>
      </div>
      {items.length > 0 && <div>
        <List className='list' items={items} />
      </div>}
    </section>
  </>
}

export default App;
