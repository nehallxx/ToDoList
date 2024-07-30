import React from 'react'

export default function TodoCard(props) {
    const {children,editTodos, deleteTodos, index}=props;
  return (
    <li className='todoItem'>
        {children}
        <div className='acsses-container'>
          <button onClick={() => {
                    editTodos(index)
                }}>
           <i className="fa-solid fa-pen-to-square"></i>
          </button>
          <button onClick={() => {
                    deleteTodos(index)
                }}>
            <i className="fa-solid fa-circle-minus"></i>
          </button>
      

        </div>
    </li>

  )
}
