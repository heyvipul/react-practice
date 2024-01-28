import React from 'react'

const serverSide = (props) => {
  // console.log(props);
  return (
    <div>
      <h2>server-side</h2>
      {
        props.data.products?.map(function(ele){
          return <li key={ele.id}>{ele.title}</li>
        })
      }
    </div>
  )
}

export const getServerSideProps = async () =>{
  const data = await(await fetch("https://dummyjson.com/products")).json();
  return {
    props :{
     data, 
    }
  }
}

export default serverSide;