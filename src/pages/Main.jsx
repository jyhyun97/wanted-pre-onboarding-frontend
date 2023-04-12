import { Link } from 'react-router-dom'

function Main() {
  return (
    <div>
      <h1>Todos!</h1>
      <Link to='/signin'>
        <button>로그인</button>
      </Link>
      <Link to='signup'>
        <button>회원가입</button>
      </Link>
    </div>
  )
}
export default Main
