import { useParams } from "react-router-dom";




function Rescipedetails()
{
    const params=useParams();
    console.log(params);//this will give you the key(id) of this page
    const{id}=params;
    return(
       <div>
        recipe details {id}
       </div> 
    );
    
}
export default Rescipedetails;