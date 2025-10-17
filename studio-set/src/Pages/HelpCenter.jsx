import Header from "../components/Header/Header";
import Button from "../components/Button/Button";
import { Link } from "react-router";

const HelpCenter = () => {

    const faqs = [];

    const blogCard = [];


  return (
    <div>
        <Header/>

        <div className="sectionIntro">
            <h1>
                Welcome to Help Center
            </h1>
            <p>
                Please take a moment to find out if a question similar to your has been asked before. 
                If your question is unique in scenario and scope <span>please feel free to contact us for further clarification.</span> 
                Your feedback is valued and appreciate here at Studio & Set
            </p>
        </div>

        <div className="faqsSection">

            

            <div className="NewQuestion">
                <div className="leadUp">
                    <h6>Still have questions?</h6>
                    <p>
                        Can’t find the answer to your question? Please contact our team.
                    </p>
                </div>
                <Button/>
            </div>

        </div>

        <div className="blogSection">
            <h3>
                Top Articles
            </h3>
            <div className="blogArticles"></div>
        </div>
    </div>
  )
}

export default HelpCenter