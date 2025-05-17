import { useEffect, useState } from "react";
interface PostType{
    id:number,
    title:string,
    body:string
}

const Posts=()=>{
    //let data:PostType[] = [];
    const [data,setData] = useState<PostType[] | undefined>()
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((response)=>{
            return response.json();
        }).then((response)=>{
            //console.log(response);
            //data = response;
            setData(response);
        })
    },[]);
    return (
        <>
        <table>
            {
                data?.map((item)=>{
                    return (
                        <tr><td>{item.id}</td><td>{item.title}</td><td>{item.body}</td></tr>
                    )
                })
            }
        </table>
        </>
    )
}

export default Posts;