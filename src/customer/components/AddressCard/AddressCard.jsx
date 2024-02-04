import React from 'react'

function AddressCard({address}) {
  return (
    <div>
      <div className='space-y-3 mt-10'>
        <p className='font-semibold '>{address?.firstName +" "+ address?.lastName}</p>
        <p>{address?.state},{address?.streetAddress}, {address?.zipCode}</p>
        <div className='space-y-1'>
          <p className='font-semibold'>PhoneNumber</p>
          <p>{address?.mobile}</p>
        </div>
      </div>
    </div>
  )
}

export default AddressCard