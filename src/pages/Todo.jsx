import axios from 'axios'
import { useState } from 'react'
import { Navigate } from 'react-router-dom'

function Todo() {
  const access_token = localStorage.getItem('access_token')
  const [todoData, setTodoData] = useState('')
  const submitTodoData = () => {
    axios
      .post(
        'https://www.pre-onboarding-selection-task.shop/todos',
        { todo: todoData },
        {
          headers: {
            Authorization: `Bearer ${access_token}`,
            ContentType: 'application/json',
          },
        }
      )
      .then((res) => {
        console.log(res)
      })
      .catch((err) => {
        console.log(err)
      })
  }

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
              onChange={(e) => setTodoData(e.target.value)}
            />
            <button data-testid='new-todo-add-button' onClick={submitTodoData}>
              추가
            </button>
          </div>
          <div>
            todo 영역
            <li>
              <label>
                <input type='checkbox' />
                <span>TODO 1</span>
              </label>
              <button data-testid='modify-button'>수정</button>
              <button data-testid='delete-button'>삭제</button>
            </li>
          </div>
        </div>
      )}
    </div>
  )
}

export default Todo
