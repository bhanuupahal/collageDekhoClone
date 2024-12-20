import Colleges from "./Colleges";
import Coursecate from "./Coursecate";
import Maincomp from "./Maincomp";
import RelatedExams from "./RelatedExams";
import Wanttolearn from "./Wanttolearn";
import {Footer} from "../component/Footer"
import Navbar from "../component/navbar/Navbar";
import FAQSection from "./FAQSection";

function Allcompthird() {
  return (
   <>
   <Navbar/>
   <Colleges/>
   <Maincomp/>
   <FAQSection/>
   <Coursecate/>
   <RelatedExams/>
   <Wanttolearn/>
   
    <Footer/>
     
   </>
  );
}

export default Allcompthird;
