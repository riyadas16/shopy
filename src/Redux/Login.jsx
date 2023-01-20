import './Login.css'
import { useEffect } from 'react';
import {getRedirectResult } from 'firebase/auth'
import {auth,signInWithGooglePopup,signInWithGoogleRedirect,creatUserDocumentfromAuth} from '../Firebaseapp'
import React from 'react';
import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput
}
from 'mdb-react-ui-kit';
import Header from './Header';

function Login(){


  // useEffect(async()=>{
  //   const response = await getRedirectResult(auth);
  //  //console.log(response)
  // },[])


  const logGoogleUser =async ()=>{
    const {user}=await signInWithGooglePopup();
    const userDocRef= await creatUserDocumentfromAuth(user)
  }

  

    return(<div><Header/>
 <MDBContainer fluid>
      <MDBRow>

        <MDBCol sm='6'>

          <div className='d-flex flex-row ps-5 pt-5'>
            <MDBIcon fas icon="crow fa-3x me-3" style={{ color: '#709085' }}/>
            {/* <span className="h1 fw-bold mb-0">Logo</span> */}
          </div>

          <div className='d-flex flex-column justify-content-center h-custom-2 w-75 pt-4'>

            <h3 className="fw-normal mb-3 ps-5 pb-3" style={{letterSpacing: '1px'}}>Log in</h3>

            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Email address' id='formControlLg' type='email' size="lg"/>
            <MDBInput wrapperClass='mb-4 mx-5 w-100' label='Password' id='formControlLg' type='password' size="lg"/>
            <button  className="btn btn-primary btn-lg mb-4 mx-5 w-100"  onClick={logGoogleUser}>Login</button>
            <button  className="btn btn-primary btn-lg mb-4 mx-5 w-100"  onClick={signInWithGoogleRedirect}>Redirect</button>
            
            <p className="small mb-5 pb-lg-3 ms-5"><a className="text-muted" href="#!">Forgot password?</a></p>
            <p className='ms-5'>Don't have an account? <a href="#!" className="link-info">Register here</a></p>

          </div>

        </MDBCol>

        <MDBCol sm='6' className='d-none d-sm-block px-0'>
          <img src="https://picsum.photos/200"
            alt="Login image" className="w-100" style={{objectFit: 'contain',width: '500px',
            height: '500px',marginTop:'50px' ,objectPosition:'left',marginLeft:'150px'}} />
        </MDBCol>

      </MDBRow>

    </MDBContainer>
  
</div>
);
}
export default Login