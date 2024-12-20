
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Allcompsec from "./compoenetsecond/Allcompsec";
import Allcompthird from "./Thirdpage/Allcompthird";
import Allcompfirst from './component/Allcompofirst';

function App() {
  return (
   <>
   {/* <Navbar/>
   <Brightfuture/>
   <Choosecollege/>
  <Praisedmedia/>
    <Collegeadmi/>
   
   
   <Degree/>
   <Perfectcollege/>
   <AchievementsCarousel/>
   <Youtube/>
    <Medianews/>
    <Callback/>
   <Studentlove/> */}
     

   {/* <Alamuriinstitue/>
     <Review/>
    <Relatedqu/>
    <Question/>
    <Nearbycol/>
    <Exploremore/>
    <Register/>  */}
    
    {/* <Maincomp/>
    <Colleges/>
    <Coursecate/>
    <RelatedExams/>
    <Wanttolearn/> */}
     

     {/* <Allcompthird/> */}
     {/* <Allcompsec/>

     */}

    
   {/* <Footer/> */}
   <BrowserRouter>
   <Routes>
    <Route path='/' element={<Allcompfirst/>}/>
    <Route path='/colleges' element={<Allcompsec/>}/>
    <Route path='/careers' element={<Allcompthird/>}/>
   </Routes>
   </BrowserRouter>

   </>
  );
}

export default App;
