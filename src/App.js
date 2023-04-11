import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Main from './pages/Main'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Todos from './pages/Todos'

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
      path: '/todos',
      element: <Todos />,
    },
  ])
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
