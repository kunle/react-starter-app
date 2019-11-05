import React, {useState, useEffect} from 'react'
import { TextField, List, ListItem } from '@material-ui/core'

/*
  Welcome developer! Please fully customize this component as needed.
*/

const MyComponent = () => {
  
  const [newTodo, setNewTodo] = useState('')
  const [enterClicked, setEnterClicked] = useState(false)
  const [todoList, setTodoList] = useState([])

  const onKeyUpHandler = e => {
    const value = e.target.value
    if(e.which === 13 && !!value) {
      setEnterClicked(true)
    }
  }

  const onToggleTodo = i => {
    const todo = todoList[i]
    const list = [...todoList]
    list.splice(i ,1,{...todo, complete: !todo.complete})
    setTodoList(list)
  }

  useEffect(() => {
    if(newTodo && enterClicked) {
      const list = [
        ...todoList, 
        {
          complete: false,
          todo: newTodo
        }
      ]
      
      setTodoList(list)
      setEnterClicked(false)
      setNewTodo('')
    }
  }, [enterClicked,newTodo, todoList]) 


  return (
    <div>
      <TextField onKeyUp={onKeyUpHandler} value={newTodo} onChange={(e) => setNewTodo(e.target.value)}></TextField>
      <MyList todoList={todoList} onToggleTodo={onToggleTodo} />
    </div>
  )
}

const MyList = ({todoList, onToggleTodo}) => {
  return (
    <List>
    {
      todoList.map((v, i) => (
        <ListItem key={i}>
          <span style={v.complete ? {textDecoration: 'line-through'} : {}} onClick={() => onToggleTodo(i)}>{v.todo}</span>
        </ListItem>
      ))
    }
  </List>
  )
}
export default MyComponent
