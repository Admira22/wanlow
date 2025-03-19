import './App.css';
import Header from './/Homepage/Header/Header'
import GetOutside from "./Homepage/GetOutside/GetOutside";
import MainPart from "./Homepage/MainPart/MainPart";
import Footer from "./Homepage/Footer/Footer";
import GridGallery from "./Homepage/GridGallery/GridGallery";
import Community from "./Homepage/Community/Community";

function App() {
    return (
        <div className="App">
            <Header/>
            <GetOutside/>
            <MainPart/>
            <GridGallery/>
            <Community/>
            <Footer/>
        </div>
    );
}
export default App;
