import AboutUs from "./AboutUs";
import Blog from "./Blog";
import BritarText from "./BritarText";
import ContantUs from "./ContantUs";
import CourseGoal from "./CourseGoal";
import MovieGrid from "./MovieGrid";
import MovieCard from "./MovieGrid";
import Status from "./Status";
import Status2 from "./Status2";
import Status3 from "./Status3";
import Status4 from "./Status4";
import Status5 from "./Status5";


function App()
{
  return(
    <>
   {/* <h1>this is a App.jsx file</h1>
    <AboutUs/>
    <ContantUs/>
    <Status/>
    <Status2/>
    <Status3/>
    <Status4/>
    <Status5/>*/}
    {/* <CourseGoal title = 'learn read' description='in depth'/>
    <CourseGoal title ='About ratan sir' description='ratan sir nice'/>
    <Blog title ='java' body ='java class is a nice'/> */}
    <Blog title="ammu" body="ammu is a nice"/>
    <BritarText color ='red'/>
    <BritarText color ='green'/>
    <BritarText color ='blue'/>
    <MovieGrid movies={[
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
   {Title:"ganga",description:"horrer",releaseDate:2007,rating:7},
  ]}/>
    </>
  )
}
export default App;