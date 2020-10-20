import React from "react";


function Header() {
    return(
        < div
        className = "banner d-flex flex-column justify-content-center align-items-center p-5"   >
      <div className="banner-overlay py-2 px-4">
        <h1>Wild Blog</h1>
        <h2>Take a walk on the Wild side!</h2>
      </div>
    </div>
    )
}

export default Header;