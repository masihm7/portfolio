export const About=()=>{

    return(

        <section id="about" className="about main-section">
    <div className="main-container">
      <h2 className="heading-secondary projects__heading-secondary">
        <span className="heading-secondary__sm"> About 🦄</span>
        <span className="heading-secondary__main">
          Here you will find more information about me, and list of my current skills in programming
          </span>
      </h2>
      <div className="main-section__content">
        <div className="about__info">
          <div className="about__main-info">
            <h3 className="heading-quaternary about__heading-quaternary">
              My Story
            </h3>
            <p className="text-primary about__text-primary">
              <span>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Error, aliquid! Itaque corrupti magnam fugiat mollitia labore
                magni saepe veritatis voluptatum alias fugit. Explicabo
                ducimus sequi aut corporis odio repellendus? Lorem ipsum dolor
                sit amet
              </span>
            </p>
            <a href="./index.html#projects"><button className="btn btn-theme about__btn-theme">Projects</button></a>
            
          </div>
          <div className="about__skill-info">
            <h3 className="heading-quaternary about__heading-quaternary">
              My Skills
            </h3>
            <ul className="about__skills">
              <li className="about__skill">html</li>
              <li className="about__skill">css</li>
              <li className="about__skill">javascript</li>
              <li className="about__skill">react</li>
              <li className="about__skill">node</li>
              <li className="about__skill">git</li>
              <li className="about__skill">python</li>
              <li className="about__skill">express</li>
              <li className="about__skill">mongoDB</li>
              <li className="about__skill">firebase</li>
              <li className="about__skill">mysql</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>

    )
}