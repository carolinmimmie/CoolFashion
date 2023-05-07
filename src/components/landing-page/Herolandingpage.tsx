import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHeart, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';


const Herolandingpage = () => {
  return (
    <div>
    <div className='hero'></div>
    <div className='container'>
      {/* H&M Carousel med 3 slides ---START--- Mili */} 
      <div id="myCarousel" className="carousel slide" data-interval="false" data-ride="carousel" >
        <ol className="carousel-indicators">
          <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/300" alt="Slide 1" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 1</div>
                  <div>399,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/301" alt="Slide 1" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 2</div>
                  <div>259,99 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/302" alt="Slide 1" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 3</div>
                  <div>450,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/303" alt="Slide 1" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 4</div>
                  <div>270,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/304" alt="Slide 2" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 5</div>
                  <div>449,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/305" alt="Slide 2" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 6</div>
                  <div>150,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/306" alt="Slide 2" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 7</div>
                  <div>450,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/307" alt="Slide 2" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 8</div>
                  <div>999,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/308" alt="Slide 3" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 9</div>
                  <div>599,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/309" alt="Slide 3" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 10</div>
                  <div>349,99 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/310" alt="Slide 3" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 11</div>
                  <div>789,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                </div>
              </div>
              <div className="col-md-3">
                <div className="px-2">
                  <img src="https://picsum.photos/200/311" alt="Slide 3" width="700" height="320"/>
                  <div className="title" style={{ fontSize: '19px'}}>Title 12</div>
                  <div>199,00 kr</div>
                  <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="sr-only">Previous</span>
          </a>
          <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
    {/* H&M Carousel med 3 slides ---END--- Mili */} 




    {/* Lorem Ipsum Text ---START--- Mili */}
      <div className="container mt-5">
        <p><strong className="stronger">Lorem ipsum</strong> dolor sit amet, consectetur adipiscing elit. Sed euismod faucibus lectus, in rutrum nulla. 
          Suspendisse potenti. Ut eget ullamcorper nisl. Morbi sodales, lectus at hendrerit rutrum, eros nisl efficitur nulla, 
          ac iaculis metus enim vel quam. Donec vehicula dui vel ipsum gravida.
        </p>
        <p><strong className="stronger">Nulla facilisi.</strong> Praesent efficitur, risus eget facilisis commodo, 
          eros risus blandit quam, vel interdum urna lorem non enim. Pellentesque eu velit ultrices, varius neque ac, tempor mi. 
          Nam pellentesque velit ac enim sagittis, vel fringilla ipsum dapibus. Curabitur efficitur.
        </p>
      </div>
    {/* Lorem Ipsum Text ---END--- Mili */}  





      {/* Ny större carousel med 4 slides ---START--- Mili */}
<div className="container mt-5">
  <div id="newCarousel" className="carousel slide" data-interval="false" data-ride="carousel">
    <ol className="carousel-indicators">
      <li data-target="#newCarousel" data-slide-to="0" className="active"></li>
      <li data-target="#newCarousel" data-slide-to="1"></li>
      <li data-target="#newCarousel" data-slide-to="2"></li>
      <li data-target="#newCarousel" data-slide-to="3"></li>
    </ol>
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="row">
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/600" alt="Slide 1" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 1</div>
              <div>599,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/601" alt="Slide 2" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 2</div>
              <div>799,99 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/602" alt="Slide 3" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 3</div>
              <div>699,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/603" alt="Slide 4" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 4</div>
              <div>899,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/604" alt="Slide 5" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 5</div>
              <div>999,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/605" alt="Slide 6" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 6</div>
              <div>1,199,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
        </div>
      </div>
      <div className="carousel-item">
        <div className="row">
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/606" alt="Slide 7" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 7</div>
              <div>1,399,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="px-2">
              <img src="https://picsum.photos/400/607" alt="Slide 8" width="1400" height="500"/>
              <div className="title" style={{ fontSize: '24px'}}>Big Title 8</div>
              <div>1,599,00 kr</div>
              <div className="heart-icon"><FontAwesomeIcon icon={faHeart} /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <a className="carousel-control-prev" href="#newCarousel" role="button" data-slide="prev">
      <span className="carousel-control-prev-icon" aria-hidden="true"></span>
      <span className="sr-only">Previous</span>
    </a>
    <a className="carousel-control-next" href="#newCarousel" role="button" data-slide="next">
      <span className="carousel-control-next-icon" aria-hidden="true"></span>
      <span className="sr-only">Next</span>
    </a>
  </div>
</div>
{/* Ny större carousel med 4 slides ---END--- Mili */} 




{/* Exempel på Footer "Om vi känner för det" ---START--- */} 
<footer className="footer py-5 mt-5" style={{ backgroundColor: '#1a1a1a', color: '#fff' }}>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">About Us</h5>
            <p className="text-secondary ml-2">Lorem ipsum dolor sit amet, consectetur adipis elit. Sed eget lorem velit. Aliquam erat.</p>
            <ul className="list-inline mt-4">
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faFacebook} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faTwitter} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faInstagram} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
              <li className="list-inline-item"><a href="#"><FontAwesomeIcon icon={faYoutube} style={{ color: '#D22D20', fontSize: '23px' }}/></a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Services</a></li>
            </ul>
          </div>
          <div className="col-lg-2 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Services</h5>
            <ul className="list-unstyled">
            <li><a href="#">SEO</a></li>
            <li><a href="#">Marketing</a></li>
              <li><a href="#">Web Design</a></li>
              <li><a href="#">Development</a></li>
            </ul>
          </div>
          <div className="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <h5 className="text-uppercase text-white mb-4">Contact Us</h5>
            <ul className="list-unstyled mb-0">
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-white" />123 Main Street, New York, NY 10001</li>
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faPhoneAlt} className="mr-2 text-white" />(123) 456-7890</li>
              <li className="mb-2 text-secondary"><FontAwesomeIcon icon={faEnvelope} className="mr-2 text-white" />info@example.com</li>
            </ul>
          </div>
        </div>
      </div>
      <p className="text-secondary mt-5 text-center">&copy; 2023 Grupp E. All rights reserved.</p>
    </footer>
    {/* Exempel på Footer "Om vi känner för det" ---END--- */} 

</div>
);
};

export default Herolandingpage;


