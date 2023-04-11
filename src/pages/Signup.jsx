import { useEffect, useState } from 'react'

function Signup() {
  const [emailValue, setEmailValue] = useState('')
  const [passwordValue, setPasswordValue] = useState('')
  const [valueTerm, setValueTerm] = useState(false)

  useEffect(() => {
    setValueTerm(emailValue.includes('@') && passwordValue.length >= 8)
  }, [emailValue, passwordValue])

  return (
    <div>
      <h1>회원가입</h1>
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
          data-testid='signup-button'
          type={'button'}
          disabled={!valueTerm}
        >
          회원가입
        </button>
      </form>
    </div>
  )
}

export default Signup
