import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import Header from './Components/Header/Header'
import Home from './Home/Home'
import Destination from './Destination/Destination'
import Crew from './Crew/Crew'
import Technology from './Technology/Technology'

const Wrapper = () => {
  return (
    <>
      <Header />
      <main className="container">
        <Outlet />
      </main>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: '/',
    element: <Wrapper />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/destination',
        element: <Destination />,
      },
      {
        path: '/crew',
        element: <Crew />,
      },
      {
        path: '/technology',
        element: <Technology />,
      },
    ],
  },
])

const App = () => {
  return <RouterProvider router={router} />
}

export default App
