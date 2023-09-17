import react from 'react';


function Navbar() {
    return (
      <ul class="nav nav-pills ct-blue">

      {/* <!--  color-classes: "ct-blue", "ct-azure", "ct-orange", "ct-red", "ct-green" */}
  
            {/* special-classes: "no-border"  --> */}
  
        <li class="active"><a href="/swipingcard">Home</a></li>
  
        <li><a href="#"> Profile</a></li>
  
        <li><a href="#">Messages</a></li>
  
        </ul>
    )
};

export default Navbar;
