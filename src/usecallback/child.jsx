import { memo } from "react";

function Child({count,onclick,name})
{
    console.log('this is getting render ',name ,count);
    return(
        <div>
            <p>{count}</p>
            <button onClick={onclick}>click</button>
        </div>
    )
}
export default memo(Child)//We wrap a component with React.memo so that React does NOT re-render it when its props have not changed, even if its parent re-renders.