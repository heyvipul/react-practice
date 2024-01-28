import React, { useEffect, useState } from 'react'
import Link from 'next/link';
import useSWR from 'swr'

const UserPage = () => {

    // old method of fetching data  = works fine 

    // const[users,setUsers] = useState([]);
    // console.log(users);
    // useEffect(()=>{
    //     async function fetchUsers(){
    //         const data = await fetch("https://dummyjson.com/products")
    //         setUsers(await data.json());
    //     }
    //     fetchUsers();
    // },[])

    //new method of fetching data in next using swr stale-while-revalidate

    const fetcher = (...args) => fetch(...args).then(res => res.json());

    const { data, error, isLoading } = useSWR('https://dummyjson.com/products', fetcher)
    console.log(data);
    

    if (error) return <div>failed to load</div>
    if (isLoading) return <h2>loading...</h2>

  return (
    <div>
        <h1>UserPage</h1>
        {
            data.products?.map(function(ele){
                return <Link key={ele.id} href={`/client-side/${ele.id}`}><div>
                {ele.title}
                </div></Link>
            }) 
        }
    </div>
  )
}

export default UserPage