import NavbarComponent from "./components/navbarComponent";
import HomeComponent from "./components/homeComponent";
import ServicesComponent from "./components/servicesComponent";
import SkillsComponent from "./components/skillsComponent";
import ContactComponent from "./components/contactComponent";
import ProjectComponent from "./components/projectComponent";


function App() {
  return (
    <div className="App">
      <NavbarComponent />
      <HomeComponent />
      <ServicesComponent />
      <SkillsComponent />
      <ProjectComponent/>
      <ContactComponent/>
    </div>
  );
}

export default App;
