// import React from 'react'

import { Button } from "../ui/button"

function Header() {
  return (
    
    <div className="flex p-2 shadow-sm justify-between items-center px-3">
        <img src="/logo.svg" alt="" />
        <div>
            <Button>Sign Out</Button>
            
        </div>
    </div>
  )
}

export default Header