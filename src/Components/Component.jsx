import React from 'react'
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import './components.css'
function Component() {
  return (
      <div>
          <header id="header" className='py-2 d-flex bg-dark text-light align-items-center px-5'>
              <div>
                  
              </div>
              <div className='d-flex gap-2 align-items-center'>
                  <h6>Discover over 1,000+ premium webflow components today!</h6>
                  <button className="btn btn-primary text-light">Unlock More</button>
              </div>
              <div>
              <FontAwesomeIcon icon="fa-solid fa-circle-xmark" />
              </div>
          </header>

          
   <nav className="shadow navbar navbar-expand-lg navbar-light bg-light">
 
    <div id="navbar" className="px-5 container d-flex gap-5">
      <a className="navbar-brand fw-bold" href="#">HireUp</a>
      <button class="navbar-toggler fs-6 fw-bold text-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
                  
     <div className="collapse navbar-collapse" id="navbarSupportedContent">
       <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         <li className="nav-item">
           <a className="nav-link active text-primary" aria-current="page" href="#">Home</a>
         </li>
         <li className="nav-item">
          <a className="nav-link" href="#">Company</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Browse</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#" tabindex="-1" aria-disabled="true">Blog</a>
        </li>
         </ul>
        <div>
         <ul className="d-flex align-items-center gap-4 justify-content-center">
         <p>Post a job</p>
        <button className="btn btn-primary" type="submit">Sign in</button>
      </ul>       
     </div> 
    </div>
    </div>
 </nav>
    <div id='section'>
              <small><span className='fs-6 text-primary mx-3'>NEW </span>Stay connected to get upcoming jobs</small>
   </div>
    <div id="intro" className=" d-flex">
           <h1 className="display-5 fw-bold">Find the most<br></br> exciting jobs in tech</h1>   
           <p className='fs-6'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Sed a mi rhoncus, pharetra leo et.<span className="text-primary"> Sign in or sign up</span> to get started!</p>
    </div>
          <div className="srchBoxImage container">
              <div id='searchBox'>
                  <input type="search" placeholder='Search...'>
                  </input>
                  <button id="srchBtn">Search</button>
              </div>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/6358b2bbb9fdec69f1b1c7a4_adam-rhodes-ep5lX958f7E-unsplash-p-1600.webp"></img>
         </div>
          

         <div id="images">
             <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b8f23b4428c_Grey%20Logo%20Large%20(2).svg" loading="lazy" alt=""></img>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b2d66b4428f_Grey%20Logo%20Large%20(5).svg" loading="lazy" alt=""></img>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b464eb4428d_Grey%20Logo%20Large%20(4).svg" loading="lazy" alt=""></img>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b1160b4428a_Grey%20Logo%20Large%20(1).svg" loading="lazy" alt=""></img>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b0585b4428b_Grey%20Logo%20Large%20(3).svg" loading="lazy" alt="">
              </img>
              <img src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8bb6c6b4428e_Grey%20Logo%20Large%20(6).svg" loading="lazy" alt=""></img>
          </div>

          <div id="latestJobs">
              <div>
                <h1 className='fw-bold display-6'>Explore the latest job openings</h1>
                 <br></br><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna.</p>
              </div>
                  <button className="btn">See All Jobs</button>
          </div>
          

          <div id='cards'>
              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>Dribbble</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold fs-4'>Front End Developer</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Marketing</p>
                  <p className='btn btn-outline-danger'>Part Time</p>
                  </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>San Antonio</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$130k - 160k</p>
                 </div>
              </div>
              </div>

              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>Dribbble</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold fs-4'>Back End Developer</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Design</p>
                  <p className='btn btn-outline-danger'>Full Time</p>
              </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>Dallas</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$130k - 160k</p>
                 </div>
              </div>
              </div>
              
              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b0ac9b44248_TokoPedia%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>Dribbble</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold fs-4'>Back End Developer</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Design</p>
                  <p className='btn btn-outline-danger'>Full Time</p>
              </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>Dallas</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$130k - 160k</p>
                 </div>
              </div>
              </div>
              

              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b1e2eb44249_Facebook%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>FaceBook</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold' id="fontSize">Lead Technical Architect</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Business</p>
                  <p className='btn btn-outline-danger'>Causual</p>
              </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>California</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$130k - 160k</p>
                 </div>
              </div>
              </div>

              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b6942b4424b_Spotify%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>Spotify</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold fs-5' id="fontSize">Digital Media Strategist</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Business</p>
                  <p className='btn btn-outline-danger'>Causual</p>
              </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>New york</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$13k - 16k</p>
                 </div>
              </div>
              </div>

              <div className='card py-5 gap-2 px-5'>
              <div className='d-flex align-items-center gap-3'>
              <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b775fb4424c_PayPal%20Icon.svg" loading="lazy" alt="" class="icon-large"></img>
              <div>
                  <h5>Paypal</h5>
                  <p>October 25, 2022</p>
              </div>
             </div>
              <p className='fw-bold fs-5'>Systems Administrator</p>
              <div className='d-flex gap-3'>
                  <p className='btn btn-outline-success'>Business</p>
                  <p className='btn btn-outline-danger'>Causual</p>
              </div>
              <div className='d-flex gap-4'>
                  <div className='d-flex gap-2'>
                  <p>California</p>
                 </div>
                 <div className='d-flex gap-2'>
                  <p>$130k - 160k</p>
                 </div>
              </div>
              </div>
         
          </div>
          

          <div id='work1'>
          <h1 className='fw-bold'>Work with exciting companies</h1>
          <p>Discover more than 1,600 open positions</p>
         </div> 
          <div id="work">
              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b6942b4424b_Spotify%20Icon.svg"></img>
                      <p>Spotify</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>200 Employeess</button>

              </div>

              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8bb874b4424a_Slack%20Icon.svg"></img>
                      <p>Slack</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>2000 Employeess</button>
              </div>

              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b775fb4424c_PayPal%20Icon.svg"></img>
                      <p>Paypal</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>2000 Employeess</button>
              </div>

              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b0ac9b44248_TokoPedia%20Icon.svg"></img>
                      <p>Tokopedia</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>2000 Employeess</button>
              </div>

              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg"></img>
                      <p>Dripple</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>5000 Employeess</button>

              </div>

              <div className='card p-4'>
                  <div>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63337525695d8b342eb4424d_Dribble%20Icon.svg"></img>
                      <p>Dripple</p>
                  </div>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at dui mollis metus gravida tristique.</p>
                   <button className='btn btn-outline-success'>4000 Employeess</button>

              </div>
          </div>

          <div className='d-flex' id="build">
              <img id="buildImage" src="https://assets.website-files.com/63337525695d8ba70ab44222/6345158a36516a477226909d_Feature%20Image.webp"></img>
              <div>
                  <p className='text-primary fw-bold'>WhY CHOOSE US</p>
                  <h1 className='fw-bold mt-2'>Build a custom membership site with locked content.</h1>
                  <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna, sit amet pulvinar diam. Sed laoreet feugiat consequat.</p>
                  <div className='d-flex gap-4 align-items-center'>
                      <img className="card p-2" src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg"></img>
                      <div>
                          <p className='fw-bold mt-2'>Add a feature point here</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                  </div>

                  <div className='d-flex gap-4 align-items-center'>
                      <img className="card p-2" src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg"></img>
                      <div>
                          <p className='fw-bold mt-2'>Add a feature point here</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                  </div>

                  <div className='d-flex gap-4 align-items-center'>
                      <img className="card p-2" src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b5e33b44263_Two-user.svg"></img>
                      <div>
                          <p className="fw-bold mt-2">Add a feature point here</p>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                      </div>
                  </div>
              </div>
          </div>

          <div id="platform1">
              <p className='text-primary'>TESTIMONIAL</p>
              <h2>See what users say about our job platform</h2>
              <div id="platform">
                  <div>
                  <img className='mb-5 card p-2' src="https://assets.website-files.com/63337525695d8ba70ab44222/63337525695d8b3fa3b4427d_Mail%20Chimp%20Icon.svg"></img>
                  <h4 className='mb-5'>
                      “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a mi rhoncus, pharetra leo et, efficitur tortor. Fusce vel convallis magna”</h4>
                  <p><span className='text-primary'>David Sinclair - </span>Senior Frontend Developer</p>
                  </div>
                  <img id="imageBoy" src="https://assets.website-files.com/63337525695d8ba70ab44222/634517c289833b2b6e36b6f2_Testimonial%20Image.jpg"></img>
              </div>
          </div>
          
          <div id='blog'>
              <p className='text-center text-primary fs-5'>BLOG</p>
              <h1 className='text-center mb-5 fw-bold'>Get the  news about jobs!</h1>
              <div id='blog1'>
                  <div className='card p-2'>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63561be639e4e57a35cf71d2_Blog%20Image.jpg">
                          
                      </img>
                      <div>
                          <button className='btn resource text-primary'>Resources</button>
                          <h5>Finding employees in the gig economy</h5>
                          <p className='text-secondary'>OCTOBER 24, 2022</p>
                          <button className='btn read'>Read More</button>
                      </div>
                  </div>


                  <div className='card p-2'>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63561be639e4e57a35cf71d2_Blog%20Image.jpg">
                          
                      </img>
                      <div>
                          <button className='btn resource text-primary'>Resources</button>
                          <h5>Finding employees in the gig economy</h5>
                          <p className='text-secondary'>OCTOBER 24, 2022</p>
                          <button className='btn read'>Read More</button>
                      </div>
                  </div>

                  <div className='card p-2'>
                      <img src="https://assets.website-files.com/63337525695d8b8aebb4423f/63561be639e4e57a35cf71d2_Blog%20Image.jpg">
                          
                      </img>
                      <div>
                          <button className='btn resource text-primary'>Resources</button>
                          <h5>Finding employees in the gig economy</h5>
                          <p className='text-secondary'>OCTOBER 24, 2022</p>
                          <button className='btn read'>Read More</button>
                      </div>
                  </div>
              </div>
          </div>

          <div id="explore">
              <h1 className='fw-bold'>Explore a job now!</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.<br></br> Mauris rhoncus pharetra cursus. Suspendisse sodales porta leo,<br></br> ac placerat ex pretium quis.</p>
              <div id="exploreBtn">
                  <input type="search" placeholder='Search here...'></input>
                  <button className='mx-3 btn btn-primary text-white fw-bold'>Search</button>
              </div>

          </div>
          
        <footer>
              <h1>HireUp</h1>
              <div id="footer">
                  <div>
                      <h6>PAGES</h6>
                      <div>
                          <p>home</p>
                          <p>Home V2</p>
                          <p>About</p>
                          <p>Pricing</p>
                          <p>Jobs</p>
                          <p>Post A job</p>
                      </div>
                  </div>
                  <div>
                      <h6>ACCOUNT</h6>
                      <div>
                          <p>Sign In</p>
                          <p>Sign Up</p>
                          <p>Reset password</p>
                          <p>User Account</p>
                          
                      </div>
                  </div>
                  <div>
                      <h6>TEMPLATES</h6>
                      <div>
                          <p>Style Guide</p>
                          <p>Changlog</p>
                      </div>
                  </div>
                  <div>
                      <h6>SIGN UP TO OUR NEWSLETTER</h6>
                      <div className='d-flex gap-1 align-items-center' id="footer1">
                          <input type="email" placeholder='enter email address'></input>
                          <button className='footerBtn btn btn-primary'>get Started</button>
                      </div>
                  </div>
              </div>
          </footer>
          <p className="copy">
              <hr></hr>
          © Made by Flowbase & powered by Webflow

          </p>

      </div>
     
  )
}

export default Component;