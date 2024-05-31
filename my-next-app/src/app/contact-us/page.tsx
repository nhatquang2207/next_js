import React from 'react'
import Form_Login from './form_contact'
import Bar_header from '@/component/layout/bar_header'
import Footer from '@/component/layout/footer'

export default function page() {
  return (
    <div>
      <Bar_header/>
      <Form_Login/> 
      <Footer/>
    </div>
  )
}
