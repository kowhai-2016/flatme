import React from 'react'

import './style.css'

const Calendar = React.createClass({
  render () {
    return (
      <div className='Calendar'>
        <iframe src='https://calendar.google.com/calendar/embed?src=rd4l9co5ju9vijplouau8v4vms%40group.calendar.google.com&ctz=Pacific/Auckland' />
      </div>
    )
  }
})

export default Calendar
