import { Outlet } from "react-router-dom";
import Header from "../header";

  function Layout()
  {
    return(
        <div>
            <Header/>
            <Outlet/>
            {/* outlet contains the child element which are presnt in route(having Header as a element) in app.jsx file  */}
        </div>
    )
  }
  export default Layout;