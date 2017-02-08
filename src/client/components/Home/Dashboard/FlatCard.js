import React from 'react'

const FlatCard = () => {
  return (
    <div className='panel-group'>
      <div className='panel panel-default'>
        <div className='panel-heading'>MyFlat 1</div>
        <div className='panel-body'>
          <ul>
            <li>Landlord1 Name</li>
            <li>Flatmate1 Name</li>
          </ul>
        </div>
      </div>
      <div className='panel panel-default'>
        <div className='panel-heading'>MyFlat 2</div>
        <div className='panel-body'>
          <ul>
            <li>Landlord1 Name</li>
            <li>Flatmate1 Name</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default FlatCard
