import React from 'react'
import { Card3dimension } from './ui/card3D'
const CardSection = () => {
  return (
    <div className='grid col-span-2'>

{[1,2, 3, 4, 5].map((nb) => (
          <div >
                <Card3dimension key={nb} title={`project nb ${nb}`} content="Hello world"/> </div>))}

</div>
  )

}

export default CardSection