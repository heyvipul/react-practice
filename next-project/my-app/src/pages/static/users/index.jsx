import React from 'react'

const staticSideUser = (props) => {
//   console.log(props.data);
  return (
    <div>
        <h2>staticSideUser</h2>
        {
        props.data.products?.map(function(ele){
          return <li key={ele.id}>{ele.title}</li>
        })
      }
    </div>
  )
}

export const getStaticProps = async () =>{
    const data = await(await fetch("https://dummyjson.com/products")).json();

    return {
        props : {
            data
        }
    }
}

export default staticSideUser