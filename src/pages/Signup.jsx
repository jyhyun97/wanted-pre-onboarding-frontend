import axios from 'axios'
import { useEffect, useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

function Signup() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [valueTerm, setValueTerm] = useState(false)
  const access_token = localStorage.getItem('access_token')
  const navigate = useNavigate()

  const submitData = () => {
    axios
      .post('https://www.pre-onboarding-selection-task.shop/auth/signup', {
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        navigate('/signin')
      })
      .catch((err) => {
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    setValueTerm(emailValue.includes('@') && passwordValue.length >= 8)
  }, [emailValue, passwordValue])

  return (
    <div>
      {access_token ? (
        <Navigate to='/todo' />
      ) : (
        <div>
          <h1>회원가입</h1>
          <form>
            <span>이메일</span>
            <input
              data-testid='email-input'
              onChange={(e) => setEmailValue(e.target.value)}
            />
            <span>비밀번호</span>
            <input
              data-testid='password-input'
              onChange={(e) => setPasswordValue(e.target.value)}
            />
            <button
              data-testid='signup-button'
              type={'button'}
              disabled={!valueTerm}
              onClick={submitData}
            >
              회원가입
            </button>
          </form>
        </div>
      )}
    </div>
  )
}

export default Signup
