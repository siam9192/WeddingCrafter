import { useLoaderData } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import WedVenues from "./wedVenues";
import Catering from "./catering";
import Decoration from "./decoration";
import { Helmet } from "react-helmet";
import Footer from "../Footer/Footer";

const Planner = () => {
    const plannerData = useLoaderData();
    const {venues,catering,decoration} = plannerData[0];
    console.log(decoration)
    return (
        <>
     <Helmet>
        <title>WeddingCrafter || Planner</title>
    </Helmet>
        <div className="max-w-7xl mx-auto font-poppins md:px-0 px-2">

            <Navbar></Navbar>
            <div className="pb-20">
                <h1 className="text-3xl font-semibold text-black my-2">Wedding venues </h1>
                <WedVenues venues={venues}></WedVenues>
            </div>
            <div>
            <h1 className="text-3xl font-semibold text-black my-2">Wedding decoration</h1>
            <Decoration decoration={decoration}></Decoration>
            </div>
            <div>
            <h1 className="text-3xl font-semibold text-black my-2">Catering Excellence</h1>
            <Catering catering={catering}></Catering>
            </div>

            
        </div>
        <Footer></Footer>
        </>
    );
}

export default Planner;
