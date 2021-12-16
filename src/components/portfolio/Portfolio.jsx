import React, { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import Modal from "react-modal";
import ModalOneContent from "./modal/ModalOneContent";
import ModalTwoContent from "./modal/ModalTwoContent";
import ModalThreeContent from "./modal/ModalThreeContent";
import ModalFourContent from "./modal/ModalFourContent";
// import ModalFiveContent from "./modal/ModalFiveContent";
// import ModalSixContent from "./modal/ModalSixContent";
// import ModalSevenContent from "./modal/ModalSevenContent";
// import ModalEightContent from "./modal/ModalEightContent";
// import ModalNineContent from "./modal/ModalNineContent";

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  // const [isOpen5, setIsOpen5] = useState(false);
  // const [isOpen6, setIsOpen6] = useState(false);
  // const [isOpen7, setIsOpen7] = useState(false);
  // const [isOpen8, setIsOpen8] = useState(false);
  // const [isOpen9, setIsOpen9] = useState(false);

  function toggleModalOne() {
    setIsOpen(!isOpen);
  }
  function toggleModalTwo() {
    setIsOpen2(!isOpen2);
  }
  function toggleModalThree() {
    setIsOpen3(!isOpen3);
  }
  function toggleModalFour() {
    setIsOpen4(!isOpen4);
  }
  // function toggleModalFive() {
  //   setIsOpen5(!isOpen5);
  // }
  // function toggleModalSix() {
  //   setIsOpen6(!isOpen6);
  // }
  // function toggleModalSeven() {
  //   setIsOpen7(!isOpen7);
  // }
  // function toggleModalEight() {
  //   setIsOpen8(!isOpen8);
  // }
  // function toggleModalNine() {
  //   setIsOpen9(!isOpen9);
  // }

  return (
    <Tabs>
      <TabList className="portfolio-tab-list">
        {/* <Tab>ALL</Tab>
        <Tab>LOGO</Tab>
        <Tab>VIDEO</Tab>
        <Tab>GRAPHIC DESIGN</Tab>
        <Tab>MOCKUP</Tab> */}
      </TabList>

      <div className="portfolio-tab-content">
        <TabPanel>
          <ul className="row grid justify-content-center">
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure onClick={toggleModalOne}>
                <img src="img/projects/project-1.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title">Python Solo Project</span>
                </div>
              </figure>

              {/* Start ModalOneContent */}
              <Modal
                isOpen={isOpen}
                onRequestClose={toggleModalOne}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalOne}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalOneContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalOneContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <figure onClick={toggleModalTwo}>
                <img src="img/projects/project-2.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Python Group Project</span>
                </div>
              </figure>

              {/* Start ModalTwoContent */}
              <Modal
                isOpen={isOpen2}
                onRequestClose={toggleModalTwo}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalTwo}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalTwoContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalTwoContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <figure onClick={toggleModalThree}>
                <img src="img/projects/project-3.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Express Solo Project</span>
                </div>
              </figure>

              {/* Start ModalThreeContent */}
              <Modal
                isOpen={isOpen3}
                onRequestClose={toggleModalThree}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalThree}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalThreeContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalThreeContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
            <li
              className="direction-reveal"
              data-aos="fade-right"
              data-aos-duration="1200"
              data-aos-delay="0"
            >
              <figure
                className="direction-reveal__card"
                onClick={toggleModalFour}
              >
                <img src="img/projects/project-4.jpg" alt="Portolio" />
                <div className=" hover-content-wrapper">
                  <span className="content-title"> Express Solo Project</span>
                </div>
              </figure>

              {/* Start ModalFourContent */}
              <Modal
                isOpen={isOpen4}
                onRequestClose={toggleModalFour}
                contentLabel="My dialog"
                className="custom-modal dark"
                overlayClassName="custom-overlay dark"
                closeTimeoutMS={500}
              >
                <div>
                  <button className="close-modal" onClick={toggleModalFour}>
                    <img src="/img/cancel.svg" alt="close icon" />
                  </button>
                  {/* End close icon */}

                  <div className="box_inner portfolio">
                    <ModalFourContent />
                  </div>
                </div>
              </Modal>
              {/* End  ModalFourContent */}
            </li>
            {/* <!-- Portfolio Item Ends --> */}

            {/* <!-- Portfolio Item Starts --> */}
           
            {/* <!-- Portfolio Item Ends --> */}
          </ul>
        </TabPanel>
        {/* End MOCKUP Project */}
      </div>
    </Tabs>
  );
};

export default Portfolio;
