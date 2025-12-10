import { useState, useLayoutEffect } from "react";

function useWindowresize() {
    const [windowsize, setwindowsize] = useState({
        width: 0,
        height: 0
    }); // here uses to store the widht and hieght
    function handlewindowsize() {
        setwindowsize({
            width: window.innerWidth,
            height: window.innerHeight
        })

    }

    useLayoutEffect(() => {//uses uselayout because it runs before rendering the dom because of which we can have the vasle  of change of widht and hieght of the window through which we can manage the dom and then render 
        //useeffect renders the dom first then it get run's
        handlewindowsize();
        window.addEventListener('resize', handlewindowsize);//added the event because the resizeing of window is a event because of which we can get the value of of hieght and width at every change
        // what does evenht handle is doing Is whenever the event resize happends or when ever the window resizes it runs the function handlewindowsize to get the value of width and height of that instant
        return () => {
            window.removeEventListener('resize', handlewindowsize);
            //If you don’t remove it, the event handler will keep running even after the component is unmounted
            // This causes memory leakss          
            // And React will warn you
        }
    }, [])

    return windowsize;
}
export default useWindowresize;