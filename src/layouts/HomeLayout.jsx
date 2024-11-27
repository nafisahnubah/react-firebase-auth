import { Link, useLoaderData } from "react-router-dom";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomeLayout = () => {

    const activities = useLoaderData();

    return (
        <div className="">
            <Header></Header>
            <div className="bg-teal-50">
                <div className="flex flex-col gap-3 text-center justify-center md:mx-40 mx-8 py-10">
                    <h1 className="font-black text-4xl">Discover Eco-Friendly Adventures</h1>
                    <p className="text-lg">Embark on unforgettable journeys that celebrate the beauty of nature while preserving it for future generations. From majestic mountain treks to serene ocean dives, explore experiences that are as sustainable as they are inspiring.</p>
                </div>

                <div className="carousel w-full h-96">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img
                        src={activities[4].image}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide2" className="carousel-item relative w-full">
                        <img
                        src={activities[1].image}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide3" className="carousel-item relative w-full">
                        <img
                        src={activities[2].image}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                    <div id="slide4" className="carousel-item relative w-full">
                        <img
                        src={activities[0].image}
                        className="w-full" />
                        <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div>
                </div>

                <div className="md:mx-40 mx-8 flex flex-col gap-3 text-center justify-center py-5">
                    <h2 className="font-bold text-2xl">Adventure Responsibly. Explore Sustainably.</h2>
                    <p className="text-lg">At Green Horizons, we bring you closer to nature while prioritizing eco-conscious practices and supporting local communities.</p>
                    <h3 className="font-bold text-lg">Start Your Adventure Today!</h3>
                </div>
            </div>

            <div className="md:px-32 px-8 bg-teal-50">
                <div>
                    <h2 className="font-bold text-2xl">Explore Activities</h2>
                    {
                        activities.length>0 && activities.map((activity) => (
                            <div className="card lg:card-side bg-teal-700 text-teal-50 shadow-xl mt-10 flex relative" key={activity.id}>
                                <figure className="flex-1">
                                    <img src={activity.image} alt={activity.adventureTitle} />
                                </figure>
                                <div className="card-body flex-1">
                                    <h2 className="font-bold text-2xl">{activity.adventureTitle}</h2>
                                    <p className="max-h-10">Some eco-friendly features:</p>
                                    <ul>
                                    {
                                        activity.ecoFriendlyFeatures.map((feature, index)=>{
                                            return <li key={index}>{index+1}. {feature}</li>
                                        })
                                    }
                                    </ul>
                                    <div className="card-actions justify-end md:absolute md:bottom-10 md:right-10">
                                        <Link to="/adventure-details" state={activity} className="btn btn-outline text-teal-50">Explore Now</Link>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
            
            <div className="md:px-32 px-8 py-10 bg-teal-50 flex flex-col gap-6">
                <h2 className="text-2xl font-bold">Check out what our users are saying:</h2>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-teal-700">
                    An exceptional company that genuinely cares about the environment and its customers. The team goes above and beyond to ensure every adventure is memorable and sustainable. Their attention to detail and focus on education around eco-conscious travel sets them apart. If you’re looking for a company that aligns with your values and delivers top-notch experiences, this is it!
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-teal-700">
                    This company is a game-changer in promoting sustainable tourism! Their commitment to eco-friendly practices and support for local communities is truly inspiring. They don’t just offer adventures; they provide meaningful experiences that make you feel connected to nature. Their customer service is outstanding, always ready to help with a smile. I’m incredibly impressed and will continue to support them!
                    </div>
                </div>
                <div className="chat chat-start">
                    <div className="chat-bubble bg-teal-700">
                    I can’t say enough good things about this company! They’ve created something truly special with their focus on sustainable adventures. Their professionalism, dedication to quality, and passion for the planet shine through in everything they do. Working with them has been an absolute pleasure, and I wouldn’t hesitate to recommend them to anyone looking for eco-friendly travel solutions.
                    </div>
                </div>
            </div>

            <div className="md:px-32 px-8 py-10 bg-teal-50">
            <h2 className="text-2xl font-bold">A brief history of our company</h2>
                <ul className="timeline">
                    <li>
                        <div className="timeline-start">1984</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">First founded</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">1998</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">Moved into our first office</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2007</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">Established 3 more branches</div>
                        <hr />
                    </li>
                    <li>
                        <hr />
                        <div className="timeline-start">2015</div>
                        <div className="timeline-middle">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                            className="h-5 w-5">
                            <path
                            fillRule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                            clipRule="evenodd" />
                        </svg>
                        </div>
                        <div className="timeline-end timeline-box">Expanded internationally</div>
                    </li>
                </ul>
            </div>

            <Footer></Footer>
        </div>
    );
};

export default HomeLayout;