import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Signin() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [valueTerm, setValueTerm] = useState(false)
  const navigate = useNavigate()

  const submitData = () => {
    axios
      .post('https://www.pre-onboarding-selection-task.shop/auth/signin', {
        email: emailValue,
        password: passwordValue,
      })
      .then((res) => {
        localStorage.setItem('access_token', res.data.access_token)
        navigate('/todo')
      })
      .catch((err) => {
        console.log(err)
        alert(err.response.data.message)
      })
  }

  useEffect(() => {
    setValueTerm(emailValue.includes('@') && passwordValue.length >= 8)
  }, [emailValue, passwordValue])

  return (
    <div>
      <h1>로그인</h1>
      <form>
        <input
          data-testid='email-input'
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <input
          data-testid='password-input'
          onChange={(e) => setPasswordValue(e.target.value)}
        />
        <button
          data-testid='signin-button'
          type={'button'}
          disabled={!valueTerm}
          onClick={submitData}
        >
          로그인
        </button>
      </form>
    </div>
  )
}

export default Signin
