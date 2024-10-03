import React from 'react'
import Card from './Card'

function Foreground() {
  return (
    
    <>
    {/* giving z-index so it will come up and we can't select the background text */}
    <div className="fixed top-0 left-0 z-[3] w-full h-full">
    <Card/>
    </div>
    </>
  )
}

export default Foreground
