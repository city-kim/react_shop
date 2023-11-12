import { useState } from 'react'
import { redirect } from 'react-router-dom'

interface SignUpFormState  {
  email: string
  password: string
}

export default function SignIn () {

  const [formData, setFormData] = useState<SignUpFormState> ({
    email: '',
    password: ''
  })

  const onChnage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setFormData(prevData => ({...prevData, [name]: value}))
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    localStorage.setItem('token', 'fake_token')
    redirect('/')
  }

  return (
    <div className='h-screen flex flex-col items-center justify-center'>
      <form onSubmit={onSubmit}>
        <fieldset className='grid gap-5'>
          <div>
            <label>
              아이디
              <input
                className='border border-gray-300'
                type="text"
                name="email"
                value={formData.email}
                onChange={onChnage}
                required
              />
            </label>
          </div>
          <div>
            <label>
              비밀번호
              <input
                className='border border-gray-300'
                type="password"
                name="password"
                value={formData.password}
                onChange={onChnage}
                required
              />
            </label>
          </div>
          <button type="submit">로그인</button>
        </fieldset>
      </form>
    </div>
  )
}