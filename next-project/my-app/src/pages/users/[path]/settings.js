import React from 'react'
import { useRouter } from 'next/router'

const pathSettings = () => {
const router = useRouter();
console.log(router);

  return (
    <div>
    <button onClick={e=>router.push(`/users/${router.query.path}`)}>back to {router.query.path}</button>
    </div>

  )
}

export default pathSettings