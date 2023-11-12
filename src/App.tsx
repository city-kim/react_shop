import { Link } from 'react-router-dom'
function App() {

  return (
    <>
      <div className='h-screen flex flex-col items-center justify-center'>
        <h1>메인페이지입니다</h1>
        <Link
          className='mt-5 p-2 border border-gray-300 rounded-md'
          to="/login"
        >로그인</Link>
      </div>
    </>
  )
}

export default App
