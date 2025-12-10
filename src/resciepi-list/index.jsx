import { useLocation } from "react-router-dom";
import useFetch from "../hooks/usefetch";
import useWindowresize from "../hooks/useWindowresize";

function Rescipie() {
    const windowsize=useWindowresize();
    // const location=useLocation();
    // console.log(location);//this provides the path of the page
    const { data, error, loading } = useFetch('https://dummyjson.com/recipes');
    console.log(data?.recipes);
    console.log(data);


    return (
        <div>
            <h1>Rescipie</h1>
            <h2>window widht is {windowsize.width} and height is {windowsize.height}</h2>
            {
                loading ? (<h1>fetching rescipe</h1>) :
                    (<ul>
                        {
                        data?.recipes?.length>0?data?.recipes.map((singlerecipe) => {
                            console.log(singlerecipe?.name);
                            
                            return(<h3 key={singlerecipe?.id}>{singlerecipe?.name}</h3>)
                        }):null
                        }
                    </ul>)
            }
        </div>
    )
}
export default Rescipie;