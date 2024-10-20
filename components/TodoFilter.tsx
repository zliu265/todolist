function TodoFilter ( {setFilter}: any) {
    return (
        <div>
            <button onClick={()=> setFilter('all')}>ALL</button>
            <button onClick={()=> setFilter('active')}>Active</button>
            <button onClick={()=> setFilter('completed')}>Completed</button>
        </div>
    )
}

export default TodoFilter;