 import Exploremore from '../compoenetsecond/Exploremore';
 import Alamuriinstitue from '../compoenetsecond/Alamuriinstitue';
import Nearbycol from '../compoenetsecond/Nearbycol';
import Question from '../compoenetsecond/Question';
import Register from '../compoenetsecond/Register';
import Relatedqu from '../compoenetsecond/Relatedqu';
import Review from '../compoenetsecond/Review';
import Navbar from '../component/navbar/Navbar';
import { Footer } from '../component/Footer';
import About from './About/About';
import CourseTable from './CourseTable';
import CoursesInfo from './CourseInfo';
import AdmissionDates from './AdmissionDates';
import CourseCards from './CourseCards';
import CollegeHighlights from './CollegeHighlights';
import AdmissionInfo from './AdmissionInfo';
import ReviewSection from './ReviewSection';
import CampusFacilities from './CampusFacilities';
import FacultyDirectory from './FacultyDirectory';
import RelatedQuestions from './RelatedQuestions';
import NewsList from './NewsList';
import CollegeExplorer from './CollegeExplorer';
import CollegeExplorer2 from './CollegeExplorer2';





function  Allcompsec() {
  return (
   <>
   <Navbar/>
   <Alamuriinstitue/>
   <About/>
   <CourseTable/>
   <CoursesInfo/>
   <AdmissionDates/>
   <CourseCards/>
   <CollegeHighlights/>
   <AdmissionInfo/>
   <ReviewSection/>
   <CampusFacilities/>
   <FacultyDirectory/>
   <RelatedQuestions/>
   <NewsList/>
   <CollegeExplorer/>
   <CollegeExplorer2/>


   {/* <Nearbycol/>
   <Question/>
   <Register/>
   <Relatedqu/>
   <Review/>
   <Exploremore/> */}
   <Footer/>
     
   </>
  );
}

export default Allcompsec;
