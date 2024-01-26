import React, { useEffect } from 'react'
import { useRouter } from 'next/router'

const user =() =>({user:"piyush",loading:false})

const indexpath = () => {

    const { query, push, replace,reload } = useRouter();

    // useEffect(()=>{
    //     if(user.user == null){
    //         replace("/")
    //     }
    // },[replace,user.user])

    return (
        <div>
            <h2>indexpath {query.path}</h2>
            <button onClick={(e) => push(`/users/${query.path}/settings`)}>move settings</button>
            <button onClick={(e) => replace("/")}>go to home</button>
            <button onClick={e=> reload()}>reload</button>
            
        </div>

    )
}

export default indexpath