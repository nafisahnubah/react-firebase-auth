import { useLocation } from "react-router-dom";
import AventureDetail from "../components/AventureDetail";
import Footer from "../components/Footer";
import Header from "../components/Header";

const AdventureDetails = () => {
    const location = useLocation();
    const receivedData = location.state;

    return (
        <div>
            <Header></Header>
            <AventureDetail data={receivedData}></AventureDetail>
            <Footer></Footer>
        </div>
    );
};

export default AdventureDetails;