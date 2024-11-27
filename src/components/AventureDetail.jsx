import moment from "moment";

const AventureDetail = ({data}) => {
    const handleTalkWithExpert = () => {
        const hour = moment().hour();
        if(hour>=10 && hour<20){
            window.open("https://meet.google.com/", "_blank", "noopener,noreferrer");
        }
        else{
            document.getElementById('modal').showModal();
        }
    }
    return (
        <div className="bg-teal-50">
            <div className="card shadow-xl bg-teal-700 text-teal-50 md:m-20 md:px-10 m-8 p-8">
                <div className="card-body text-center">
                    <h2 className="text-4xl font-bold">{data?.adventureTitle}</h2>
                    <h3 className="text-xl"><span className="font-bold">Category:</span> {data?.categoryName}</h3>
                    <p className="text-xl">{data?.shortDescription}</p>
                </div>
                <figure>
                    <img
                    className="md:w-1/2 rounded-lg"
                    src={data?.image}
                    alt={data?.adventureTitle} />
                </figure>
                <div className="card-body text-xl flex flex-col gap-5">
                    <p><span className="font-bold">Cost:</span> {data?.adventureCost}</p>
                    {data?.bookingAvailability ? <p className="bg-green-400 rounded-lg w-24 p-2 text-black">Available</p> : <p className="bg-red-400 rounded-lg w-32 p-3 text-black">Unavailable</p>}
                    <p><span className="font-bold">Location:</span> {data?.location}</p>
                    <p><span className="font-bold">Duration:</span> {data?.duration}</p>
                    <p><span className="font-bold">Max group size:</span> {data?.maxGroupSize}</p>
                    <p><span className="font-bold">Difficulty level:</span> {data?.adventureLevel}</p>
                    <div>
                        <p className="max-h-10 font-bold">Items included:</p>
                        <ul>
                        {
                            data?.includedItems.map((feature, index)=>{
                                return <li key={index}>{index+1}. {feature}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div>
                        <p className="max-h-10 font-bold">Some eco-friendly features:</p>
                        <ul>
                        {
                            data?.ecoFriendlyFeatures.map((feature, index)=>{
                                return <li key={index}>{index+1}. {feature}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div>
                        <p className="max-h-10 font-bold">Special instructions:</p>
                        <ul>
                        {
                            data?.specialInstructions.map((feature, index)=>{
                                return <li key={index}>{index+1}. {feature}</li>
                            })
                        }
                        </ul>
                    </div>
                    <div className="card-actions justify-end">
                        <button onClick={handleTalkWithExpert} className="btn btn-outline text-teal-50 text-lg">Talk with an Expert</button>
                    </div>
                    <dialog id="modal" className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 text-black">✕</button>
                        </form>
                        <h3 className="font-bold text-black text-lg">Consultation time: 10:00am - 8:00pm</h3>
                    </div>
                    </dialog>
                </div>
            </div>
        </div>
    );
};

export default AventureDetail;