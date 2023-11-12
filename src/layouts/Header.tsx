import { Link } from 'react-router-dom'
import { useQuery } from '@tanstack/react-query'
import type { User } from '@/types/server'

export default function Header () {

  const { data } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () =>
      fetch('http://localhost:8080/user/2')
        .then((res) => res.json()),
  })

  return (
    <header className='flex p-2 items-center justify-between shadow'>
      <section className='flex gap-5'>
        <Link to='/'>
          <h1>LOGO</h1>
        </Link>
        <nav>
          <ul className='flex gap-5'>
            <li>
              <Link to='item'>아이템</Link>
            </li>
            <li>
              <Link to='user'>유저정보</Link>
            </li>
          </ul>
        </nav>
      </section>
      <Link to='/logout'>{data?.name || ''} 로그아웃</Link>
    </header>
  )
}