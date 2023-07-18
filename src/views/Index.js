/*eslint-disable*/
import React from "react";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";
import { Bounce, Slide } from "react-awesome-reveal";

export default function HomePage() {
  return (
    <>
      <IndexNavbar fixed />
      <section
        className="header relative pt-16 items-center flex h-screen max-h-860-px"
        style={{
          background:
            'url("https://static.vecteezy.com/system/resources/previews/013/730/901/non_2x/morning-sky-spring-sunst-sky-scape-in-blue-and-yellow-colour-of-nature-sky-in-sunny-day-summer-horizon-natural-banner-background-for-world-environment-day-save-the-earth-or-earth-day-vector.jpg")',
          backgroundRepeat: "no-repeat",
          backgroundSize:"100% 100%"
        }}
      >
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <Slide>
              <div className="pt-32 sm:pt-0">
                <h2 className="font-bold text-4xl text-black-600">
                  Welcome to <span className="text-teal-500">RN Skies</span> -
                  Turning Your Ideas into Reality!
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                  Are you an entrepreneur or a business owner with a brilliant
                  idea but lacking the resources or technical expertise to bring
                  it to life? Look no further! At RN Skies, we specialize in
                  transforming your innovative concepts into successful
                  projects.
                </p>
                <div className="mt-12">
                  <a
                    href="/"
                    target="_blank"
                    className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                  >
                    Dive In
                  </a>
                  <a
                    href="/"
                    className="github-star ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                    target="_blank"
                  >
                    Know Us
                  </a>
                </div>
              </div>
            </Slide>
          </div>
        </div>
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <Bounce>
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                  <img
                    alt="..."
                    src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                    className="w-full align-middle rounded-t-lg"
                  />
                  <blockquote className="relative p-8 mb-4">
                    <svg
                      preserveAspectRatio="none"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 583 95"
                      className="absolute left-0 w-full block h-95-px -top-94-px"
                    >
                      <polygon
                        points="-30,95 583,95 583,65"
                        className="text-lightBlue-500 fill-current"
                      ></polygon>
                    </svg>
                    <h4 className="text-xl font-bold text-white">
                      Great project for your awesome ideas
                    </h4>
                    <p className="text-md font-light mt-2 text-white">
                      we turn innovative ideas into reality. We are a team of
                      experienced professionals dedicated to providing top-notch
                      project development services. Whether you are a startup
                      entrepreneur or an established business looking to expand,
                      we are here to transform your vision into a successful
                      project.
                    </p>
                  </blockquote>
                </div>
              </Bounce>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <Slide direction="right">
                <div className="flex flex-wrap">
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-sitemap"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Concept Analysis
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          We work closely with you to understand your vision,
                          target audience, and business objectives.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-drafting-compass"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Customized Development
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          From design to implementation, our talented developers
                          use the latest technologies and industry best
                          practices to build robust and scalable solutions.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="w-full md:w-6/12 px-4">
                    <div className="relative flex flex-col min-w-0 mt-4">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-newspaper"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Quality Assurance
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          We take pride in delivering high-quality projects that
                          exceed your expectations.
                        </p>
                      </div>
                    </div>
                    <div className="relative flex flex-col min-w-0">
                      <div className="px-4 py-5 flex-auto">
                        <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                          <i className="fas fa-file-alt"></i>
                        </div>
                        <h6 className="text-xl mb-1 font-semibold">
                          Timely Delivery
                        </h6>
                        <p className="mb-4 text-blueGray-500">
                          We understand the importance of deadlines in the
                          business world. Our team is committed to delivering
                          your project on time, without compromising on quality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Slide>
            </div>
          </div>
        </div>
        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <Slide direction="left">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-sitemap text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Proven Track Record
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  Our team has a solid track record of delivering successful
                  projects across various industries.
                </p>
              </Slide>
            </div>
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <Slide direction="right">
                <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                  <img
                    alt="..."
                    src={"assets/img/component-btn.png"}
                    className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                  />
                  <img
                    alt="..."
                    src={"assets/img/component-profile-card.png"}
                    className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                  />
                  <img
                    alt="..."
                    src={"assets/img/component-info-card.png"}
                    className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                  />
                  <img
                    alt="..."
                    src={"assets/img/component-info-2.png"}
                    className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                  />
                  <img
                    alt="..."
                    src={"assets/img/component-menu.png"}
                    className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                  />
                  <img
                    alt="..."
                    src={"assets/img/component-btn-pink.png"}
                    className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                  />
                </div>
              </Slide>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <div className="bg-lightBlue-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/react.jpg"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      ReactJS
                    </p>
                  </div>

                  <div className="bg-blueGray-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/next.png"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      NextJS
                    </p>
                  </div>

                  <div className="bg-emerald-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/vue.jpg"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Vue.js
                    </p>
                  </div>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <div className="bg-yellow-500 shadow-lg rounded-lg text-center p-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/javascript.png"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      JavaScript
                    </p>
                  </div>
                  <div className="bg-green-500 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/node.png"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      NodeJS
                    </p>
                  </div>
                  <div className="bg-red-700 shadow-lg rounded-lg text-center p-8 mt-8">
                    <img
                      alt="..."
                      className="shadow-md rounded-full max-w-full w-16 mx-auto p-2 bg-white"
                      src={"assets/img/angular.jpg"}
                    />
                    <p className="text-lg text-white mt-4 font-semibold">
                      Angular
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl font-semibold">Trending Tech Giant</h3>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                We believe in continous progress, keep going attitude help us to
                progress with new technologies.
              </p>
              <ul className="list-none mt-6">
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fas fa-fingerprint"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        we are passionate about leveraging the latest
                        technologies to bring your business ideas to life.{" "}
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="fab fa-html5"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        We stay at the forefront of technological advancements
                        to ensure that your project benefits from the latest
                        tools, frameworks, and platforms.{" "}
                      </h4>
                    </div>
                  </div>
                </li>
                <li className="py-2">
                  <div className="flex items-center">
                    <div>
                      <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                        <i className="far fa-paper-plane"></i>
                      </span>
                    </div>
                    <div>
                      <h4 className="text-blueGray-500">
                        Our experienced consultants will analyze your business
                        idea, provide insights on the latest technology trends,
                        and recommend the best strategies to leverage new
                        technologies for your project's success.
                      </h4>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl mb-2 font-semibold leading-normal">
                  Customized Solutions
                </h3>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We understand that each project is unique, and we tailor our
                  services to fit your specific needs.
                </p>
                <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                  We follow an agile development approach to keep you involved
                  throughout the process.
                </p>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={"assets/img/documentation.png"}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">Beautiful Example Pages</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              To be the go-to project development partner for clients globally,
              renowned for our commitment to excellence and customer
              satisfaction.
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Page
                  </h5>
                  {/* <Link to="/auth/login"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"assets/img/login.jpg"}
                    />
                  </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Profile Page
                  </h5>
                  {/* <Link to="/profile"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"assets/img/profile.jpg"}
                    />
                  </div>
                  {/* </Link> */}
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  {/* <Link to="/landing"> */}
                  <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                    <img
                      alt="..."
                      className="align-middle border-none max-w-full h-auto rounded-lg"
                      src={"assets/img/landing.jpg"}
                    />
                  </div>
                  {/* </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
                Portfolio
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                Our team of experts will work closely with you to understand
                your vision and goals, helping you shape your idea into a
                concrete project plan.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                We believe that design is an integral part of any successful
                project. Our skilled designers will create visually appealing
                and intuitive interfaces for your users.
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                From web applications to mobile apps, we specialize in building
                tailor-made software solutions that align perfectly with your
                requirements.
              </p>
              <a
                href="https://github.com/"
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">Why Choose Us?</h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
                At RN Skies, we pride ourselves on being a leading project
                development company that thrives on challenges and embraces
                creativity. Our journey began with a vision to empower
                businesses and individuals by providing cutting-edge
                technological solutions that create an impact. With years of
                experience in the industry, we have honed our skills and
                processes, enabling us to take on projects of all sizes and
                complexities.
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href="/"
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
