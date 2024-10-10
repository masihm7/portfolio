import image1 from '../assets/landing.png'
import image2 from '../assets/image2.jpg'
import image3 from '../assets/image3.png'
import image4 from '../assets/image4.png'

export const Projects=()=>{

    return(
        <section id="projects" className="projects main-section">
    <div className="main-container">
      <h2 className="heading-secondary projects__heading-secondary">
        <span className="heading-secondary__sm"> Projects 🛠️</span>
        <span className="heading-secondary__main">
          Here you will find some of the personal and clients projects that I created with the project details
        </span>
      </h2>
      <div className="main-section__content">
        <div className="projects__list">
          <div className="projects__list-item">
            <div className="projects__list-item-count">
              <span className="projects__list-item-count-num"> 1 </span>
              <span className="projects__list-item-count-line"> </span>
              <span className="projects__list-item-count-end-dot"> </span>
            </div>
            <div className="projects__list-item-details">
              <div className="projects__list-item-img-cont">
                <img src={image1} alt="Project Image" className="projects__list-item-img" />
              </div>
              <h3 className="heading-tertiary projects__list-item-heading-tertiary">
              Watch2Gether
              </h3>
              <span><i>HTML, CSS, React, Node, express, MongoDB</i></span>
              <p className="text-primary projects__list-item-text-primary">
                <span>
                Watch2Gether is a web application that allows users to create or join virtual rooms where they can watch YouTube videos in perfect synchronization with friends and chat in real-time. This project enhances online social interactions by providing a platform for sharing video-watching experiences, even when users are physically apart.
                </span>
              </p>
              <a href="https://watch-2-gether.vercel.app/" target="_blank">
              <button className="btn btn-theme projects__btn-theme">
                Live Link
              </button>
              </a>
              <a href="https://github.com/whyshashi/Video_Sync_App" target="_blank">
              <button className="btn btn-inv projects__btn-inv">Code Link</button></a>
              
            </div>
          </div>


          <div className="projects__list-item projects__list-item--inv">
            <div className="projects__list-item-details">
              <div className="projects__list-item-img-cont">
                <img src={image2} alt="Project Image" className="projects__list-item-img" />
              </div>
              <h3 className="heading-tertiary projects__list-item-heading-tertiary">
              VibeTunes
              </h3>
              <span><i>HTML, CSS, javascript, Bootstrap, Tailwind</i></span>
              <p className="text-primary projects__list-item-text-primary">
                <span>
                open-source music streaming application, designed to transform the way you experience music. Our dedicated team, driven by a deep passion for both music and technology, has crafted a platform that aims to provide an unparalleled listening experience, setting new standards in the industry.
                </span>
              </p>
              <a href="https://vibetunesweb.netlify.app/" target="_blank">
              <button className="btn btn-theme projects__btn-theme">
                Live Link
              </button>
              </a>
              <a href="https://github.com/imarani494/Rights-Reactors_022/tree/Main" target="_blank">
              <button className="btn btn-inv projects__btn-inv">Code Link</button></a>
            </div>
            <div className="projects__list-item-count">
              <span className="projects__list-item-count-num"> 2 </span>
              <span className="projects__list-item-count-line"> </span>
              <span className="projects__list-item-count-end-dot"> </span>
            </div>
          </div>
          <div className="projects__list-item">
            <div className="projects__list-item-count">
              <span className="projects__list-item-count-num"> 3 </span>
              <span className="projects__list-item-count-line"> </span>
              <span className="projects__list-item-count-end-dot"> </span>
            </div>



            <div className="projects__list-item-details">
              <div className="projects__list-item-img-cont">
                <img src={image3} alt="Project Image" className="projects__list-item-img" />
              </div>
              <h3 className="heading-tertiary projects__list-item-heading-tertiary">
              Budget Buddy
              </h3>
              <span><i>HTML, CSS, Bootstrap, Tailwind</i></span>
              {/* <!-- <hr class="projects__title-text-divider" /> --> */}

              <p className="text-primary projects__list-item-text-primary">
                <span>
                Budget Buddy is an all-in-one personal finance tracker that allows you to keep your expenditures, savings, and earnings in check without any hassle. The following example shows that even in the present society full of opportunities and unique temptations, it is important to manage personal finances well.
                </span>
              </p>
              <a href="https://vikram0104irctc.github.io/Amazon-Avengers_076/" target="_blank">
              <button className="btn btn-theme projects__btn-theme">
                Live Link
              </button>
              </a>
              <a href="https://github.com/vikram0104irctc/Amazon-Avengers_076" target="_blank">
              <button className="btn btn-inv projects__btn-inv">Code Link</button></a>
            </div>
          </div>



          <div className="projects__list-item projects__list-item--inv">
            <div className="projects__list-item-details">
              <div className="projects__list-item-img-cont">
                <img src={image4} alt="Project Image" className="projects__list-item-img" />
              </div>
              <h3 className="heading-tertiary projects__list-item-heading-tertiary">
              Slide Master
              </h3>
              {/* <!-- <hr class="projects__title-text-divider" /> --> */}
              <span><i>HTML, CSS, React,Firebase</i></span>
              <p className="text-primary projects__list-item-text-primary">
                <span>
                Slide Master is a powerful web application designed for creating and managing presentations effortlessly. It offers features like adding and editing text, images, shapes, and preset templates for quick slide design. With a dark theme, draggable/resizable elements, and an intuitive control panel, Slide Master ensures a seamless user experience.
                </span>
              </p>
              <a href="https://hack-hurdles-036.vercel.app/" target="_blank">
              <button className="btn btn-theme projects__btn-theme">
                Live Link
              </button>
              </a>
              <a href="https://github.com/SyedFahadAli1/Hack-Hurdles_036" target="_blank">
              <button className="btn btn-inv projects__btn-inv">Code Link</button></a>
            </div>
            <div className="projects__list-item-count">
              <span className="projects__list-item-count-num"> 4 </span>
              <span className="projects__list-item-count-line"> </span>
              <span className="projects__list-item-count-end-dot"> </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    )
}
