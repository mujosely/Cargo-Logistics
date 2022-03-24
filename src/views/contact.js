import React from 'react'
import HomeLayout from '../components/HomeLayout';
import './contact.css';
import { BankOutlined  } from '@ant-design/icons';
const ContactUs = () => {
  return (
    <>
    <section id="blog" className="overview-block-ptb white-bg iq-blog">
    <div className="container">
      
      
      <div className="row">
        
        
        <div className="col-sm-12 col-md-4 re-mt-30">
          <div className="iq-blog-box">
           
           
            <div className="iq-blog-detail">
              <div className="blog-title"> <a href="blog-single.html"><h5 className="iq-tw-6">Blogpost With Image</h5> </a> </div>
             
             
           
           
             
             
               
               
            </div>
          </div>
        </div>
        
       
       
      </div>
    </div>
  </section>
  <div>
    
    
                      </div>

                      <section class="iq-our-info white-bg overview-block-ptb">
        <div class="container">
            <div class="row">
                <div class="col-sm-4">
                    <div class="iq-info-box text-center iq-pt-50">
                        <div class="info-icon green-bg"><i class="ion-ios-location-outline" aria-hidden="true"></i></div>
                        <h4 class="iq-tw-6 iq-mt-25 iq-mb-15">Address</h4>
                        <span class="lead iq-tw-6">1234 North Avenue Luke Lane, South Bend, IN 360001</span>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="iq-info-box text-center iq-pt-50">
                        <div class="info-icon green-bg"><i class="ion-ios-telephone-outline" aria-hidden="true"></i></div>
                        <h4 class="iq-tw-6 iq-mt-25 iq-mb-15">Phone</h4>
                        <span class="lead iq-tw-6">+0123 456 789</span>
                        <p>Mon-Fri 8:00am - 8:00pm</p>
                    </div>
                </div>
                <div class="col-sm-4">
                    <div class="iq-info-box text-center iq-pt-50">
                        <div class="info-icon green-bg"><i class="ion-ios-email-outline" aria-hidden="true"></i></div>
                        <h4 class="iq-tw-6 iq-mt-25 iq-mb-15">Mail</h4>
                        <span class="lead iq-tw-6">support@appino.com</span>
                        <p>24 X 7 online support</p>
                    </div>
                </div>
                <div class="col-sm-12">
                    <ul class="info-share">
                        <li><a href="javascript:void(0)"><i class="fa fa-twitter"></i></a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-facebook"></i></a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-google"></i></a></li>
                        <li><a href="javascript:void(0)"><i class="fa fa-github"></i></a></li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <div class="col-sm-12">
                                <div class="heading-title iq-mb-60">
                                    <h2 class="title iq-tw-6">Get in Touch</h2>
                                    <div class="divider"></div>
                                    <p>Do you have a question for us? we'd love to here from you and we would be happy to answer your questions. Reach out to us and we'll respond as soon as we can.</p>
                                </div>
                            </div>

                            <div className="row">
  <div id="formmessage">Success/Error Message Goes Here</div>
  <form className="form-horizontal" id="contactform" method="post" action="https://templates.iqonic.design/appino/html/php/contact-form.php">
    <div className="contact-form">
      <div className="col-sm-6">
        <div className="section-field">
          <input id="name" type="text" placeholder="Name*" name="name" />
        </div>
        <div className="section-field">
          <input type="email" placeholder="Email*" name="email" />
        </div>
        <div className="section-field">
          <input type="text" placeholder="Phone*" name="phone" />
        </div>
      </div>
      <div className="col-sm-6">
        <div className="section-field textarea">
          <textarea className="input-message" placeholder="Comment*" rows={7} name="message" defaultValue={""} />
        </div>
        <input type="hidden" name="action" defaultValue="sendEmail" />
        <button id="submit" name="submit" type="submit" value="Send" className="button pull-right iq-mt-40">Send Message</button>
      </div>
    </div>
  </form>
  <div id="ajaxloader" style={{display: 'none'}}><img className="center-block mt-30 mb-30" src="images/logo" alt /></div>
</div>

{/* footer */}
<footer className="iq-footer white-bg text-center">
  <div className="container">
    <div className="row">
      <div className="col-md-10 col-md-offset-1">
        <div className="footer-info iq-mt-50 iq-mb-30">
          <img id="logo_img" className="img-responsive center-block iq-mb-10 wow zoomIn" data-wow-duration="1s" src="images/logo-footer.png" alt style={{visibility: 'visible', animationDuration: '1s', animationName: 'zoomIn'}} />
          <p>call us if you need any help or sugestion </p>
        </div>
      </div>
    </div>
    <div className="row">
      <div className="col-sm-12">
        <div className="footer-copyright iq-ptb-20">Copyright @ <span id="copyright"> 2022</span> <a href="javascript:void(0)" className="text-green">cargo logistics system.</a> All Rights Reserved </div>
      </div>
    </div>
  </div>
</footer>


    </>
    
  )
}

export default ContactUs;
