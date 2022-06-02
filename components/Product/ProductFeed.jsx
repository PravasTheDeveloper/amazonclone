import React from 'react'

function ProductFeed({ productTitle,image }) {
  return (
    <>
      <div className='m-2 bg-white p-6 flex flex-col justify-between' style={{"minHeight":"400px"}}>
        <h1 className='h-92 mb-10 text-xl font-bold '>{productTitle}</h1>
        <div className="h-full w-full flex justify-center items-center">
          <img src={image} className="h-auto w-full" />
        </div>
        <a href="" className='text-teal-700 text-sm font-semibold hover:underline mt-4'>See More</a>
      </div>
    </>
  )
}

export default ProductFeed