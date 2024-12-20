import Brightfuture from "./Brightfuture";
import Callback from "./Callback";
import Choosecollege from "./Choosecollege";
import { Collegeadmi } from "./Collegeadmi";
import { Degree } from "./Degree";
import ExamSlider from "./ExamSlider";
import { Footer } from "./Footer";
import Navbar from "./navbar/Navbar";
import Perfectcollege from "./Perfectcollege";
import { Praisedmedia } from "./Praisedmedia";
import Studentlove from "./Studentlove";
import Youtube from "./Youtube";



function Allcompfirst() {
  return (
   <>
   <Navbar/>
   <Brightfuture/>
   <ExamSlider/>
   <Choosecollege/>
   <Praisedmedia/>
   <Collegeadmi/>
   <Degree/>
   <Perfectcollege/>
   <Youtube/>
   <Studentlove/>
   <Callback/>
   <Footer/>

  
   
  
     
   </>
  );
}

export default Allcompfirst;
