import './App.css'
import Commentlist from './comment-list'
import Layout from './component/layoutpage';
import Hooks from './hooks';
import Notfound from './notfoundpage';
import Reacthookform from './reacthookform';
import Rescipedetails from './recipe-details';
import Rescipie from './resciepi-list'
import { Routes,Route, useNavigate, Link, useRoutes } from 'react-router-dom';
import Usememo from './usememo';
function CustomRoutes()
{
  const element1=useRoutes([
    {
      path:'/home',element:<Layout/>,
      children:[
        
          {path:'comment-list' ,element:<Commentlist/>},
          {path:'resciepi-list' ,element:<Rescipie/>},
          {path:'resciepi-list/:id' ,element:<Rescipedetails/>}
        
      ],
      
    },
    {path:'*', element:<Notfound/>},
    {
      path:'/react-hook-form',
      element:<Reacthookform/>
    },
    {
      path:'/hooks',
      element:<Hooks/>
    },
    {
      path:'/usememo',
      element:<Usememo/>
    },
  ]);
  return(
    <div>
      {
        element1
      }
    </div>
  )
}

function App() {
const navigate=useNavigate();//Returns a function that lets you navigate programmatically in the browser in response to user interactions or effects.
  return (
    <div>
       <h2>react rounting and custom hooks</h2>
        <div style={{paddingBottom:20}}>
          <Link to={'/home/comment-list'}>common-list</Link>
          {/* this is the  alternative of navigate */}
          </div>
       <button onClick={()=>navigate('/home/comment-list')}>comment</button>
       <button onClick={()=>navigate('/home/resciepi-list')}>rescipie</button>
       <button onClick={()=>navigate('/home')}>Home</button>
       {/* routes combines the multiple individual routrfe and route decides the path and tells which element should render at this specific path */}
      <CustomRoutes/>
    </div>
  )
  // lower code is used inside the return but putted down to comment out
      //  <Routes>
      //   <Route path='/home' element={<Layout/>}>
      //   {/* put parent path infront of the child path in child route */}
      //       <Route path='/home/comment-list' element={<Commentlist/>}/>
      //   <Route path='/home/resciepi-list' element={<Rescipie/>}/>
      //   <Route path='/home/resciepi-list/:id' element={<Rescipedetails/>}/>
      //   </Route>
      //   <Route path='*' element={<Notfound/>}/>
      //   {/* to show the not found page give * as a path */}
      //  </Routes>
}

export default App;
