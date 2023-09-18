import React from "react";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";


function FireLogin() {
    const auth = getAuth();

	  //----- Login code start	  
	  document.getElementById("login").addEventListener("click", function() {
		  var email =  document.getElementById("login_email").value;
		  var password = document.getElementById("login_password").value;

		  signInWithEmailAndPassword(auth, email, password)
		  .then((userCredential) => {
		    // Signed in 
		    const user = userCredential.user;
		    console.log(user);
		    alert(user.email+" Login successfully!!!");
		    document.getElementById('logout').style.display = 'block';
		    // ...
		  })
		  .catch((error) => {
		    const errorCode = error.code;
		    const errorMessage = error.message;
		    console.log(errorMessage);
		    alert(errorMessage);
		  });		  		  
	  });
	  //----- End
      return (
        
	<form name="login_form" id="login_form" method="post" action="#" enctype="multipart/form-data" >
	<div class="col-sm-4">
		<div class="form-group">
	      <label for="email">Email</label>
		  <input type="text" name="login_email" id="login_email" class="form-control" placeholder="Enter your email" />
		</div>
		
		<div class="form-group">
	      <label for="password">Password</label>
		  <input type="password" name="login_password" id="login_password" class="form-control"  placeholder="Enter your password" />
		</div>
		<button type="button" id="login" name="login" class="btn btn-success">Login</button>
	</div>
 	
  </form>
        );
      }

export default FireLogin;