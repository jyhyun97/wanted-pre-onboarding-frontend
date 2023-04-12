import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todo from './pages/Todo'

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
    },
    {
      path: '/signin',
      element: <Signin />,
    },
    {
      path: '/signup',
      element: <Signup />,
    },
    {
      path: '/todo',
      element: <Todo />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
