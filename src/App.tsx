import { Suspense, useEffect } from 'react';
import { ProjectPages } from './components/common/ProjectPages';
import './styles/appStyles.scss'
import {
  createHashRouter,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";
import { Loader } from './components/common/Loader';



const App = () => {

  const router = createHashRouter(
    ProjectPages.map(p => {
      return {
        path: p.path,
        element: <Suspense fallback={<Loader />}>
          {p.element}
        </Suspense>
      }
    })
  ),
    [searchParams] = useSearchParams();


  useEffect(() => {
    console.log(searchParams);
  }, [])
  return (
    <div className='app-container'>
      <RouterProvider router={router} />
    </div>
  )
}

export default App
