import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Card from "./components/Card";


function App() {
  return (
    <>
    <Header />
    <Navbar/>
    <div>
    <Sidebar/>

    <main>
     
      <Card/>
      
      </main>
    </div>
    <Footer/>
   

    </>
  );
}

export default App;