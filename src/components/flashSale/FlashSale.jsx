import React from 'react'
import './FlashSale.scss';
import FlashSaleCard from './FlashSaleCard';

const FlashSale = () => {
   return (
      <>
         <section className='flashSale'>
            <div className="title">
               <div className="titleName">
                  FLASH SALE
               </div>
               <div className="btn-view">
                  Xem tất cả
                  <i class="fa-solid fa-arrow-right"></i>
               </div>
            </div>
            <FlashSaleCard />
         </section>
      </>
   )
}

export default FlashSale