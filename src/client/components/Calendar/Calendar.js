import React from 'react'

import './style.css'

const Calendar = React.createClass({
  render () {
    return (
      <div className='Calendar'>
        <h1>Calendar</h1>
        <iframe src='https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;hl=en_GB&amp;bgcolor=%2366cccc&amp;src=rd4l9co5ju9vijplouau8v4vms%40group.calendar.google.com&amp;color=%231B887A&amp;ctz=Pacific%2FAuckland' />
      </div>
    )
  }

})

export default Calendar
