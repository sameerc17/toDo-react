const List = ({ items }) => {
    return <div>
        {items.map((item) => {
            const { id, title } = item;
            return <article className='list_item'>
                <p key={id}>{title}</p>
            </article>
        })}
    </div>
}

export default List;