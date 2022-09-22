import Footer from "./Footer/Footer";
import ProfileCard from "./ProfileCard/ProfileCard";

function App() {
  return (
    <div>
      Hola Koders!
      <aside className="col-4">
        <ProfileCard />
      </aside>      
      <Footer />
    </div>
  );
}

export default App;
