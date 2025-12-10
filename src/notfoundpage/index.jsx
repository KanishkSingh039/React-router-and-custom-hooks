import { Link } from "react-router-dom";

function Notfound()
{
    return(
        <div>
            <h1>not found any page</h1>
            <Link to={'/home/resciepi-list'}>go to recipe list page</Link>
        </div>
    );
}
export default Notfound;