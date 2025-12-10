import useFetch from "../hooks/usefetch";

function Commentlist()
{
    // const result=useFetch('https://dummyjson.com/comments');
    const {data,error,loading}=useFetch('https://dummyjson.com/comments');
    // console.log(result);
    console.log(data);
    return(
        <div>
            <h1>comment-List</h1>
            {
                loading?(<h1>comments loading</h1>):
                data?.comments.length>0?data?.comments.map((singlecomment)=>{
                    console.log(singlecomment?.body);
                    return(<h3 key={singlecomment.id}>{singlecomment?.body}</h3>)
                }):null
            }
        </div>
    )
}
export default Commentlist;