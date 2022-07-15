import * as React from 'react';
import classes from './TodoItem.module.css';

const TodoItem: React.FC<{
  text: string;
  id: string | number;
  onRemoveTodo: (id: string | number) => void;
}> = (props) => {
  const removeTodoHandler = (id: string | number) => {
    props.onRemoveTodo(id);
  };

  return (
    <li className={classes.item} onClick={() => removeTodoHandler(props.id)}>
      {props.text}
    </li>
  );
};

export default TodoItem;
