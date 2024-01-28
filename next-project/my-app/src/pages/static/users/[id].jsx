import React from 'react'

const staticUsersbyID = (props) => {
  // console.log(props.data);
  return (
    <div>
        <h2>static users page name : {props.data.title}</h2>
    </div>
  )
}

export const getStaticPaths =  async () =>{
    const data = await(await fetch(`https://dummyjson.com/products`)).json();
    const allusersId = data.products.map(products => products.id)
    console.log(allusersId);


    return {
        paths : allusersId.map((productID) =>({params :{id : `${productID}`}}) ),
        fallback : false
    }
}

export const getStaticProps = async (context) =>{
    const id = context.params.id;
    const data = await(await fetch(`https://dummyjson.com/products/${id}`)).json();
    return {
        props : {
            data,
        }
    }
                  
}

export default staticUsersbyID