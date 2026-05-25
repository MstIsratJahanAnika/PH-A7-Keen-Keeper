import CallingInfos from "./callingInfos/CallingInfos";

const TimeLinePage = () => {

    // context theke data access kora
    // const contextData = useContext(CommunicationTypeContext);
    // console.log(contextData, 'context data from timeLinePage');

    // directly destructuring korte chaile

    
    return (
        <div className="container mx-auto mt-20 mb-10">
            <h2 className="font-bold text-5xl">TimeLine</h2>

            <CallingInfos></CallingInfos>
        </div>
    );
};


export default TimeLinePage;