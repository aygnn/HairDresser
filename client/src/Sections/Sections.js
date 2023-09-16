import React from 'react'
import Section1 from './Section1/Section1'
import './Sections.scss';
import Section2 from './Section2/Section2';

export default function Sections() {
  return (
    <div className='sections'>
      <Section1/>
      <Section2/>
    </div>
  )
}
