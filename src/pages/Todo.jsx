import { Navigate } from 'react-router-dom'

function Todo() {
  const access_token = localStorage.getItem('access_token')

  return (
    <div>
      {!access_token ? (
        <Navigate to='/signin' />
      ) : (
        <div>
          <div>
            입력 영역
            <input />
            <button>추가</button>
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
