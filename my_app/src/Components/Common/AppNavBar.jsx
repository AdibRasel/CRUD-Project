import React from 'react'

import "./NavBar.css"

function AppNavBar() {
  return (
    <div>
      <div className="NavBar">
        <div className="LeftSide">
          <a href="/">CRUD Project</a>
        </div>
        <div className="RightSide">
          <ul>
            <li><a href="Create">Create</a></li>
            <li><a href="/">Read</a></li>
            <li><a href="Update">Update</a></li>
          </ul>
        </div>
      </div>


    </div>
  )
}

export default AppNavBar