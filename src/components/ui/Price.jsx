import React from 'react'

export const Price = ({ salePrice, originalPrice }) => {
  return (
<div className="book__price">
        {salePrice ? (
          <>
            <span className="book__price--normal">
              ${Number(originalPrice).toFixed(2)}
            </span>
            ${Number(salePrice).toFixed(2)}
          </>
        ) : (
          <span>${Number(originalPrice).toFixed(2)}</span>
        )}
      </div>  )
}
