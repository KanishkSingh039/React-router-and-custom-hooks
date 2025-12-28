import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { addnewproduct, Fetchlistofproduct } from "./api";
import { useState } from "react";

function ReactQuerry() {
    // const query=useQuery({
    //     queryKey:['productlist'],//this is provide name or to identify what are we doing
    //     queryFn: ()=>Fetchlistofproduct(),  //this is to tell what dunction we need to call
    // })
    // console.log(query);
    // console.log(query.data);
    const { data, isLoading } = useQuery(
        {
            queryKey: ['productlist'],
            queryFn: () => Fetchlistofproduct()
        }
    );
    const getquerryclient=useQueryClient();//this is use to call the refetch by askinmg it with the querry provider from the main file 
    const [product, setproduct] = useState('');
    const { mutateAsync } = useMutation({
        mutationFn: addnewproduct,
        onSuccess:()=> getquerryclient.invalidateQueries(["productlist"])//here we are invalidating the previous querrykey to create new one and calling the refetch from provider 
    })
    async function muttatingthelist(product) {
        await mutateAsync(product);
        setproduct("");
    }
    function handleclick(event) { setproduct(event.target.value); }
    if (isLoading) return <h1>Loading!!!</h1>
    return (
        <div>
            <h1>Tanstack Querry</h1>
            <div>
                <input type="text" value={product} onChange={handleclick} placeholder="add product" name="product" />
                <button onClick={()=>muttatingthelist(product)} disabled={product.trim() === ""} type="button"></button>
                {/*Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.
                "To short out this error  we need to rap that setstate taking function inside onclick in a arrow function wo that this function call on onclick only "
 */}
                {/* if disable condition is true then button will not work   */}
            </div>
            <ul>

                {
                    data?.length ? data.map(product => {
                        console.log(product);
                        return (<li key={product.id}>{product.title}</li>)
                    }) : <h1>Sorry!!!! not able to fetch data</h1>
                }
            </ul>
        </div>
    )
}
export default ReactQuerry;