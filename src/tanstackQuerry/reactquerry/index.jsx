import { useQuery } from "@tanstack/react-query";
import { Fetchlistofproduct } from "./api";

function ReactQuerry()
{
    // const query=useQuery({
    //     queryKey:['productlist'],//this is provide name or to identify what are we doing
    //     queryFn: ()=>Fetchlistofproduct(),  //this is to tell what dunction we need to call
    // })
    // console.log(query);
    // console.log(query.data);
    const {data,isLoading}=useQuery(
        {
            queryKey:['productlist'],
            queryFn:()=>Fetchlistofproduct()
        }
    )
    if(isLoading)return <h1>Loading!!!</h1>
    return(
        <div>
            <h1>Tanstack Querry</h1>
            <ul>
                
                {
                    data?.length?data.map(product=>{
                        console.log(product);
                        return(<li key={product.id}>{product.title}</li>)
                    }):<h1>Sorry!!!! not able to fetch data</h1>
                }
            </ul>
        </div>
    )
}
export default ReactQuerry;