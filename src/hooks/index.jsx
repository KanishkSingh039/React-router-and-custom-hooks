import { useEffect, useRef } from "react";

function Hooks() {
    const countvalue=useRef(0);//useref uses to refer any dom element , on the change of value of the refered element react will not re render the component
    //it gives the mutable object having a current value and that current value is the refered element
    //and after refering that dom element you can do lot of thing like changing the color of etc
    const element=useRef();
    const inputref=useRef();
    function handleclick()
    {
        countvalue.current++;
        console.log(countvalue.current);
        
    }
    useEffect(()=>{
        console.log(element.current);
        element.current.style.color='red';
        //after doing this you will see you are getting <div style="color: red;">heyy</div>
        inputref.current.focus();//what is does , it will put the focus on the refered element like it put the focus on input 
        setTimeout(()=>{
            element.current.style.color='green';
            setTimeout(()=>{
                element.current.style.color='yellow'
            },1000);
        },2000)
    },[])
    return(
        <div>
            <h1>useRef, useCallback , useMemo</h1>
            <button onClick={handleclick}>click</button>
            <div ref={element}>heyy</div>
            <input name="name" type="text" ref={inputref}/>
        </div>
    )
}
export default Hooks;