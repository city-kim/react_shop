import {
  createBrowserRouter,
  Outlet,
  redirect,
} from 'react-router-dom'
import App from '@/App.tsx'

import Header from '@/layouts/Header'
import Foooter from '@/layouts/Footer'

import AuthSignIn from '@/pages/auth/SignIn.tsx'
import ItemList from '@/pages/item/List.tsx'
import ItemDetail from '@/pages/item/Detail.tsx'
import UserInfo from '@/pages/user/Info'
import NotFound from '@/pages/NotFound'

const withHeader = 
<div className='h-screen flex flex-col'>
  <Header />
    <main className='container mx-auto flex-1'>
      <Outlet/>
    </main>
  <Foooter />
</div>

export const router = createBrowserRouter([
  {
    element: 
    <div>
      <Outlet/>
    </div>,
    children: [
      {
        path: '/',
        element: <App/>,
      }
    ]
  },
  {
    element: withHeader,
    children: [
      {
        path: '/item',
        element: <ItemList/>,
      },
      {
        path: '/item/:id',
        element: <ItemDetail/>,
      },
      {
        path: '/user',
        element: <UserInfo />,
      },
    ],
    loader: shouldPrivateRoute,
  },
  {
    element: <Outlet />,
    children: [
      {
        path: '/login',
        element: <AuthSignIn/>
      }
    ],
    loader: shouldPublicRoute,
  },
  {
    element: (
      <div className='h-screen flex flex-col items-center justify-center'>
        <Outlet/>
      </div>
    ),
    children: [
      {
        path: '*',
        element: <NotFound/>
      }
    ]
  }
])

function shouldPrivateRoute () {
  // 로그인 된 사용자만 접급가능
  const token = localStorage.getItem('token')
  if (!token) return redirect('/login')
  return null
}

function shouldPublicRoute () {
  // 로그인되지 않은 사용자만 접근가능
  const token = localStorage.getItem('token')
  if (token) return redirect('/')
  return null
}