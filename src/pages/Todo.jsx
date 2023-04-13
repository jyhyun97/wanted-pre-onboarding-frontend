import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Todo() {
  const access_token = localStorage.getItem('access_token')
  const [todo, setTodo] = useState('')
  const [todolist, setTodolist] = useState([])
  const postTodo = () => {
    axios
      .post(
        'https://www.pre-onboarding-selection-task.shop/todos',
        { todo: todo },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            ContentType: 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res)
        getTodo()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const getTodo = () => {
    axios
      .get('https://www.pre-onboarding-selection-task.shop/todos', {
        headers: { Authorization: `Bearer ${access_token}` },
      })
      .then((res) => {
        setTodolist(res.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const updateTodo = (props) => {
    axios
      .put(
        `https://www.pre-onboarding-selection-task.shop/todos/${props.id}`,
        { todo: props.todo, isCompleted: !props.isCompleted },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            ContentType: 'application/json',
          },
        }
      )
      .then((res) => {
        getTodo()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTodo()
  }, [])

  return (
    <div>
      {!access_token ? (
        <Navigate to='/signin' />
      ) : (
        <div>
          <div>
            입력 영역
            <input
              data-testid='new-todo-input'
              onChange={(e) => setTodo(e.target.value)}
            />
            <button data-testid='new-todo-add-button' onClick={postTodo}>
              추가
            </button>
          </div>
          <div>
            todo 영역
            {todolist.map((ele) => {
              return (
                <li key={ele.id}>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={ele.isCompleted}
                      onClick={() => {
                        updateTodo(ele)
                      }}
                    />
                    <span>{ele.todo}</span>
                  </label>
                  <button data-testid='modify-button'>수정</button>
                  <button data-testid='delete-button'>삭제</button>
                </li>
              )
            })}
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
