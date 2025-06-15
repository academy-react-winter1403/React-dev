import React from 'react'
import FooterInfoBtn from '../../common/FooterInfoBtn'
import SocialMediaBtn from '../../common/SocialMediaBtn'

const FooterAuthorize = () => {
  return (
    <div className='flex gap-1.5 flex-row-reverse mt-10 mb-12 max-w-[1500px]  w-[80%]'>
      <FooterInfoBtn />
      <SocialMediaBtn />
    </div>
  )
}

export default FooterAuthorize
