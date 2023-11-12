import { useQuery } from '@tanstack/react-query'
import type { User } from '@/types/server'

export default function UserInfomation () {
  
  const { isPending, error, data } = useQuery<User>({
    queryKey: ['userData'],
    queryFn: () =>
      fetch('http://localhost:8080/user/2')
        .then((res) => res.json()),
  })

  if (isPending) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  return (
    <div>
      유저정보 상세
      {data ? JSON.stringify(data) : ''}
    </div>
  )
}