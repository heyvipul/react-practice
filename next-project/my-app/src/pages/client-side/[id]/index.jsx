import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'


const userInfoById = () => {
    const[userInfo,setUserInfo] = useState();
    const router = useRouter();
    console.log(userInfo);
    console.log(router);

    useEffect(() => {
        const id = router.query.id;

        if (id) {
            async function getUserId() {
                try {
                    const data = await fetch(`https://dummyjson.com/products/${id}`);
                    setUserInfo(await data.json());
                } catch (error) {
                    console.error("Error fetching user information:", error);
                }
            }
            getUserId();
        }
    }, [router.query.id]);
    

    return (
        <div>
            {userInfo ? (
                <div>
                    <h2>{userInfo.title}</h2>
                    <h2>{userInfo.brand}</h2>
                </div>
            ) : (
                <h2>Loading...</h2>
            )}
        </div>
    );
    
}

export default userInfoById