import "./Home.css";
import Hero from "../hero/Hero";

function Home() {
  return (
    <>
      <Hero />
      {/* -------- About */}
      <section className="about" id="about">
        <div className="container flex items-center">
          <div className="flex-1" data-aos="slide-right">
            <h1>
              About <span> Me</span>
            </h1>
            <h3>Hello I'm Samim Aktar</h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus at dolores quis reprehenderit natus obcaecati! Veritatis
              libero dicta repudiandae, quos voluptas placeat excepturi
              deleniti, sapiente illum, doloribus laudantium sit eaque Lorem
              ipsum dolor, sit amet consectetur adipisicing elit. Doloribus at
              dolores quis reprehenderit natus obcaecati! Veritatis libero dicta
              repudiandae, quos voluptas placeat excepturi deleniti, sapiente
              illum, doloribus laudantium sit eaque?
            </p>
            <div className="social">
              <a href="#">
                <img src="../../../public/fac.png" alt="" />
              </a>
              <a href="#">
                <img src="../../../public/insta.png" alt="" />
              </a>
              <a href="#">
                <img src="../../../public/link.png" alt="" />
              </a>
            </div>
          </div>
          <div className="flex-1" data-aos="slide-left">
            <img
              className="about-me-img"
              src="../../../public/photo3.png"
              alt="dp"
            />
          </div>
        </div>
      </section>
      {/* --------- skills */}
      <section className="skill" id="skill">
        <div className="title">
          <h1>
            My <span>Skills</span>
          </h1>
        </div>
        <div className="skill-container container" data-aos="flip-right">
          <div className="skill-font">
            <h2 className="skill-title">FONT-END</h2>
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span>95%</span>
              </div>
              <div className="line html"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span>80%</span>
              </div>
              <div className="line css"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Java Script</span>
                <span>70%</span>
              </div>
              <div className="line js"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>React</span>
                <span>70%</span>
              </div>
              <div className="line js"></div>
            </div>
          </div>
          <div className="skill-back">
            <h2 className="skill-title">BACK-END</h2>
            <div className="bars">
              <div className="info">
                <span>Node.js</span>
                <span>70%</span>
              </div>
              <div className="line node"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>Express.js</span>
                <span>75%</span>
              </div>
              <div className="line express"></div>
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span>60%</span>
              </div>
              <div className="line api"></div>
            </div>
          </div>
        </div>
      </section>

      {/* ------ What I DO -------- */}
      <section className="service what-i-do-container" id="services">
        <div>
          <h2>How I can help your next project</h2>
        </div>
        <div className=" container service-container">
          <div className="web" data-aos="slide-right">
            <img src="../../../public/webpng.png" alt="web" />
            <h2> Web Desing</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              illo corrupti tempora explicabo itaque nulla quam unde laudantium
              nisi vitae.
            </p>
          </div>
          <div className="photoshop" data-aos="flip-up">
            <img src="../../../public/mobile.png" alt="photo" />
            <h2>Mobile App</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Neque
              quas quod magnam? Consequatur provident suscipit architecto harum
              reprehenderit ad odio.
            </p>
          </div>
          <div className="desktop" data-aos="slide-left">
            <img src="../../../public/seo.png" alt="desk" />
            <h2>SEO </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum
              aliquid iure nemo architecto illum laborum distinctio facere
              praesentium deserunt asperiores.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="contact" id="contact">
        <div className="title">
          <h2>Contact Me</h2>
        </div>
        <div className="contact-container container">
          <div className="drop-message" data-aos="fade-down">
            <div className="input-feilds">
              <input type="text" className="input" placeholder="Name" />
              <input
                type="text"
                className="input"
                placeholder="Email Address"
              />
              <input type="text" className="input" placeholder="Phone" />
              <input type="text" className="input" placeholder="Subject" />
            </div>
            <div className="input-message">
              <textarea placeholder="Message"></textarea>
              <div className="btn1">send</div>
            </div>
          </div>
          <div className="address" data-aos="fade-up">
            <div className="fst">
              <p>
                <i className="fa fa-map-marker" aria-hidden="true"></i>
                &nbsp;&nbsp;24/9 <br />
                Newtown <br />
                Kolkata-700136 <br />
              </p>
            </div>
            <div className="sec">
              <p>
                <i className="fa fa-mobile"></i>91+&nbsp;12345678987{" "}
              </p>
            </div>
            <div className="thir">
              <p>
                <i className="fa fa-envelope-square" aria-hidden="true"></i>{" "}
                &nbsp;&nbsp;samimaktar444@gmail.com
              </p>
            </div>
            <div className="four">
              <p>
                <i className="fa fa-globe" aria-hidden="true"></i>
                &nbsp;&nbsp;www.samimaktar.com
              </p>
            </div>
            <div className="smedia">
              <a href="#">
                <img src="../../../public/fac.png" alt="" />
              </a>
              <a href="#">
                <img src="../../../public/insta.png" alt="" />
              </a>
              <a href="#">
                <img src="../../../public/link.png" alt="" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
