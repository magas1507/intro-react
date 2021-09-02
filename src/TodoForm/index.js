import React from 'react';
import { TodoContext } from '../TodoContext';
import './TodoForm.css'

function TodoForm() {
  const [newTodoValue, setNewTodoValue] = React.useState('')
  const {
    addTodos,
    setOpenModal,
  } = React.useContext(TodoContext);
  const onChange = (event) => {
    setNewTodoValue(event.target.value)
  }
  const onCancel = () => {
    setOpenModal(false)
  };
  const onSubmit = (event) => {
    event.preventDefault();
    addTodos(newTodoValue)
    setOpenModal(false)
  };
  return (
    <form onSubmit={onSubmit}>
      <label>Ingresa el nuevo TODO</label>
      <textarea
        value={newTodoValue}
        onChange={onChange}
        placeholder="Cortar la cebolla para el almuerzo"
      />
      <div className="TodoForm-buttonContainer">
        <button
          type="button"
          onClick={onCancel}
          className="TodoForm-button TodoForm-button-cancel"
        >
          Cancelar
        </button>
        <button
          type="submit"
          className="TodoForm-button TodoForm-button-add"
        >
          Añadir
        </button>
      </div>
    </form>
  )
}

export { TodoForm };