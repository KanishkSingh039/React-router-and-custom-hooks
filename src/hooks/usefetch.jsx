import { useEffect, useState } from "react";


//creating a usefetch custom hook
function useFetch(url, options = {}) {
    const [data, setdata] = useState(null);
    const [loading, setloading] = useState(false);
    const [error, seterror] = useState(null);

    async function fetchData() {
        setloading(true);
        try {
            const Data = await fetch(url);
            if (!Data.ok) throw new Error(Data.statusText())
            const result = await Data.json();
            if (result) {
                setdata(result);
                seterror(false);
                setloading(false);
            }



        } catch (error) {
            console.log(error);

            setloading(false);
            seterror(error);
        }

    }

    useEffect(() => {
        fetchData()
    }, [url]);
    return {
        data,error,loading
    }
    
}
export default useFetch;