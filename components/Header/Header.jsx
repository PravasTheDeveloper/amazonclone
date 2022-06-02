import React from 'react'
import Banner from '../Banner/Banner'
import ProductFeed from '../Product/ProductFeed'
import BottomNav from './BottomNav'
import TopNav from './TopNav'
import Data from '../../Data'
import Data2 from '../../Data2'
import HomePageCata from './HomePageCata'


function Header() {

  return (
    <>
      <div className='bg-gray-100 relative'>
        <div className='bg-slate-900 w-full h-auto text-white px-8 py-2' >
          <TopNav />
        </div>
        <div className='bg-slate-700 w-full h-auto text-white px-8 py-2'>
          <BottomNav />
        </div>
        <div className='mx-w-screen-2xl mx-auto container'>
          <Banner />
        </div>
        <div className='z-30 container mx-auto p-10 relative -mt-60' >
          {/* <div className='grid grid-flow-row-dense grid-cols-5'>
            {
              Data.slice(0,10).map((data) => {
                return <ProductFeed productTitle={data.title} />
              })
            }

          </div> */}
          <div className='grid grid-flow-row-dense grid-cols-4'>
            {
              Data2.map((data) => {
                return <HomePageCata productTitle={data.name} image={data.imageLink}/>
              })
            }

          </div>

          <div>
            
          </div>

        </div>
      </div>
    </>
  )
}

// export async function getServerSideProps(context) {
//   const res = await fetch("https://fakestoreapi.com/products")
//   const products = await res.json()

//   return {
//     props: { products : products} // will be passed to the page component as props
//   }
// }

export default Header;