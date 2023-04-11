function Signup() {
  return (
    <div>
      <h1>회원가입</h1>
      <form>
        <input data-testid='email-input' value={'이메일'} />
        <input data-testid='password-input' value={'패스워드'} />
        <button data-testid='signup-button'>회원가입</button>
      </form>
    </div>
  )
}

export default Signup
