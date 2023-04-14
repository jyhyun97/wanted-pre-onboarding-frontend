import axios from 'axios'
import { useEffect, useRef, useState } from 'react'
import { Navigate } from 'react-router-dom'

function Todo() {
  const access_token = localStorage.getItem('access_token')
  const [todo, setTodo] = useState('')
  const [todolist, setTodolist] = useState([])
  const [editMode, setEditMode] = useState({ state: false, id: undefined })
  const editInput = useRef()
  const header = {
    Authorization: `Bearer ${access_token}`,
    ContentType: 'application/json',
  }

  const postTodo = () => {
    axios
      .post(
        'https://www.pre-onboarding-selection-task.shop/todos',
        { todo: todo },
        { headers: header }
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
        headers: header,
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
        { todo: props.todo, isCompleted: props.isCompleted },
        { headers: { headers: header } }
      )
      .then((res) => {
        getTodo()
      })
      .catch((err) => {
        console.log(err)
      })
  }
  const deleteTodo = (props) => {
    axios
      .delete(
        `https://www.pre-onboarding-selection-task.shop/todos/${props.id}`,
        { headers: { headers: header } }
      )
      .then((res) => {
        console.log(res)
        getTodo()
      })
      .catch((err) => {
        console.log(err)
      })
  }

  useEffect(() => {
    getTodo()
    // eslint-disable-next-line
  }, [])

  return (
    <div>
      {!access_token ? (
        <Navigate to='/signin' />
      ) : (
        <div>
          <div>
            할 일
            <input
              data-testid='new-todo-input'
              onChange={(e) => setTodo(e.target.value)}
            />
            <button data-testid='new-todo-add-button' onClick={postTodo}>
              추가
            </button>
          </div>
          <div>
            할 일 목록
            {todolist.map((ele) => {
              return (
                <li key={ele.id}>
                  <label>
                    <input
                      type='checkbox'
                      defaultChecked={ele.isCompleted}
                      onClick={() => {
                        updateTodo({
                          ...ele,
                          isCompleted: !ele.isCompleted,
                        })
                      }}
                    />
                    {editMode.state && editMode.id === ele.id ? (
                      <>
                        <input
                          type='text'
                          ref={editInput}
                          defaultValue={ele.todo}
                        />
                        <button
                          data-testid='submit-button'
                          onClick={() => {
                            updateTodo({
                              ...ele,
                              todo: editInput.current.value,
                            })
                            setEditMode({ state: false, id: ele.id })
                          }}
                        >
                          제출
                        </button>
                        <button
                          data-testid='cancel-button'
                          onClick={() => {
                            setEditMode({ state: false, id: ele.id })
                          }}
                        >
                          취소
                        </button>
                      </>
                    ) : (
                      <>
                        <span>{ele.todo}</span>
                        <button
                          data-testid='modify-button'
                          onClick={() =>
                            setEditMode({ state: true, id: ele.id })
                          }
                        >
                          수정
                        </button>
                        <button
                          data-testid='delete-button'
                          onClick={() => deleteTodo(ele)}
                        >
                          삭제
                        </button>
                      </>
                    )}
                  </label>
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
