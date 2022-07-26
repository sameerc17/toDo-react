import './App.css';
const List = ({ items, clearItem, editItem }) => {
    return <div>
        {items.map((item) => {
            const { id, title } = item;
            return <article className='list_item'>
                <div className="item">
                    <p key={id}>{title}</p>
                    <button className='edit_btn' onClick={() => editItem(id)}>Edit</button>
                    <button className='del_btn' onClick={() => clearItem(id)}>Delete</button>
                </div>

            </article>
        })}
    </div>
}

export default List;