import { useCallback, useMemo, useState } from "react"
import Child from "./child";
function Callback()
{
      const [count1,setcount1]=useState(0);
      const [count2,setcount2]=useState(0);
    //   const memorize1=useMemo(()=>setcount1(count1+1),[count1]);
    //   const memorize2=useMemo(()=>setcount2(count2+1),[count2]); never use usememo for setting state because will run the infinite loop because on render memo renders and set state through which component renders again and it will continue 
    const memorize1=useCallback(()=>setcount1(count1+1),[count1]);//useCallback returns a memoized version of a function whose reference does not change unless its dependencies change.
    //React stores the functions->Same reference reused on next render-> Props comparison passes-> React.memo work
    const memorize2=useCallback(()=>setcount2(count2+1),[count2]);
    return(
        <div>
            <h1>callback</h1>
            {/* <Child count={count1} onclick={()=>setcount1(count1+1) } name='count1'/>
            <Child count={count2} onclick={()=>setcount2(count2+1) } name='count2'/> */}
            <Child count={count1} onclick={memorize1} name='count1'/>
            <Child count={count2} onclick={memorize2} name='count2'/>
        </div>
    )
}
export default Callback