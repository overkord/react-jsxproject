import React from 'react'
import Button from '../components/Generics/Button'
import SectionTitle from '../components/Generics/SectionTitle'

const NotFound = () => {
  return (
    <div className='container'>
        <div>
            <SectionTitle title="Hoppas nu gick någonting snett!!" description="404 ERROR" />
            <Button type="black" url="/" title="Hitta hem igen!" />
        </div>
        
    </div>
  )
}

export default NotFound