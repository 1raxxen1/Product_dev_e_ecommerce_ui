import React from 'react'

type Props = {}

const HomepageFooter = (props: Props) => {
  return (
    <div className='w-full bg-gray-200 p-10 flex justify-between'>
      <div>make great shit.</div>

      <div className='flex justify-between gap-2'>
        <div>Facebook</div>
        <div>Instagram</div>
        <div>Twitter</div>
      </div>

      <div>2026 Fried Carboretor</div>
    </div>
  )
}

export default HomepageFooter