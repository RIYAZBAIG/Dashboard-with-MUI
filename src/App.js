import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import About from "./Components/About";
import SideBar from "./Components/SideBar";
import Dashboard from "./Components/Dashboard";
import Dashboard1 from "./Components/Dashboard1";
import Dashboard2 from "./Components/Dashboard2";
import Dashboard3 from "./Components/Dashboard3";
import Widgets from "./Components/Widgets";
import TopNavigation from "./Components/TopNavigation";
import Boxed from "./Components/Boxed";
import FixedSideBar from "./Components/FixedSideBar";
import ReusableCard from "./Components/ReusableCard";
import ChartJS from "./Components/ChartJS.JSX";
import Forms from "./Components/Forms";
import DateCalendar from "./Components/DateCalendar";
import ProfilePage from "./Components/ProfilePage";
import AddTodoList from "./Components/AddTodoList";
import General from "./Components/General";
import Icons from "./Components/Icons";
import Buttons from "./Components/Buttons";
import Sliders from "./Components/Sliders";
import Moderns from "./Components/Moderns";
import TimeLine from "./Components/TimeLine";
import Ribbons from "./Components/Ribbons";
import Invoice from "./Components/Invoice";
import Profile from "./Components/Profile";
import Commerce from "./Components/Commerce";
import Projects from "./Components/Projects";
import ProjectAdds from "./Components/ProjectAdds";
import ProjectEdit from "./Components/ProjectEdit";
import ProjectDetails from "./Components/ProjectDetails";
import Contacts from "./Components/Contacts";

function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <SideBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          <Route path="/Dashboard" element={<Dashboard/>}/>
          <Route path="/Dashboard1" element={<Dashboard1/>}/>
          <Route path="/Dashboard2" element={<Dashboard2/>}/>
          <Route path="/Dashboard3" element={<Dashboard3/>}/>
          <Route path="/Widgets" element={<Widgets/>}/>
          <Route path="/TopNavigation" element={<TopNavigation/>}/>
          <Route path="/Boxed" element={<Boxed/>}/>
          <Route path="/FixedSideBar" element={<FixedSideBar/>}/>
          <Route path="/ReusableCard" element={<ReusableCard/>}/>
          <Route path="/ChartJS" element={<ChartJS/>}/>
          <Route path="/Forms" element={<Forms/>}/>
          <Route path="/DateCalendar" element={<DateCalendar/>}/>
          <Route path="/ProfilePage" element={<ProfilePage/>}/>
          <Route path="/AddTodoList"  element={<AddTodoList/>}/>
          <Route path="/General" element={<General/>}/>
          <Route path="/Icons" element={<Icons/>}/>
          <Route path="/Buttons" element={<Buttons/>}/>
          <Route path="/Sliders" element={<Sliders/>}/>
          <Route path="/Moderns" element={<Moderns/>}/>
          <Route path="/TimeLine" element={<TimeLine/>}/>
          <Route path="/Ribbons" element={<Ribbons/>}/>
          <Route path="/Invoice" element={<Invoice/>}/>
          <Route path="/Profile" element={<Profile/>}/>
          <Route path="/commerce" element={<Commerce/>}/>
          <Route path="/Projects" element={<Projects/>}/>
          <Route path="/ProjectAdds" element={<ProjectAdds/>}/>
          <Route path="/Projectedit" element={<ProjectEdit/>}/>
          <Route path="/Projectdetails" element={<ProjectDetails/>}/>
          <Route path="/contacts" element={<Contacts/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
