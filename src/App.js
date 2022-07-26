import { useState } from 'react';
import './App.css';
import List from './List';
function App() {

  const [text, setText] = useState('')
  const [editID, setEditID] = useState(null)
  const [items, setItems] = useState([])
  const [editingAlert, setEditingAlert] = useState(false)

  const onHandleSubmit = (e) => {
    e.preventDefault();
    if (text && editingAlert) {
      setItems(items.map((item) => {
        if (item.id === editID) {
          return { ...item, title: text };
        }
        return item;
      })
      );
      setText('')
      setEditingAlert(false)
      setEditID(null)
    }
    else
      if (text) {
        const item = { id: new Date().getTime().toString(), title: text }
        setItems([...items, item])
        setText('')
      }
  }

  const clearAllItems = () => {
    setItems([])
  }

  const clearItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  }

  const editItem = (id) => {
    const specificItem = items.find((item) => item.id === id);
    setEditingAlert(true)
    setEditID(id)
    setText(specificItem.title)
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
          > {editingAlert ? 'Edit item' : 'Add item'}</button>
        </form>
        <br></br>
      </div>
      {items.length > 0 && <div>
        <List className='list' items={items} clearItem={clearItem} editItem={editItem} />
        <button onClick={clearAllItems}>Clear All Items</button>
      </div>}
    </section>
  </>
}

export default App;
