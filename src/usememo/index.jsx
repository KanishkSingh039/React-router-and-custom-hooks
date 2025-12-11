import { useMemo, useState } from "react";
import useFetch from "../hooks/usefetch";


function Usememo() {
    const { data, loading } = useFetch('https://dummyjson.com/products');
    const [flag, setflag] = useState(false);
    const memorize = useMemo(()=>filtering(),[data?.products]);
    //useMemo will only recompute the memoized value when one of the deps has changed.
    //or when there is any change in component then the memorized value of usememo will not render until and unless there is any change in its dependencies, For example in this component the filterning function is memorized in use memo and this function will not run or runder until there is change in dependencies
    if (loading) return (<h1>loading</h1>); console.log(data);
    function filtering() {
        console.log("rendering");
        /* through loging out the rendring you can check that on toggling the flag without the use memo it rendering the whole component */
        return(data?.products.map(product => {
            if (product?.price && product?.price > 10) {
                // console.log(product.title)
                return (<li key={product?.id}>{product?.title}</li>)
            }
            return null;
        }))
    }
    return (
        <div>
            <h1 style={{ color: flag ? 'red' : 'black' }}>learn use memo</h1>
            <button onClick={() => setflag(!flag)}>click</button>
            <ul>
                {memorize}
            </ul>
        </div>
    )
}
export default Usememo;