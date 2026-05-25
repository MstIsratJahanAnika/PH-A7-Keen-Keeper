import CallingInfos from "./callingInfos/CallingInfos";
import TextingInfos from "./textingInfos/TextingInfos";
import VideoCallInfos from "./videoCallInfos/VideoCallInfos";

const TimeLinePage = () => {

    // context theke data access kora
    // const contextData = useContext(CommunicationTypeContext);
    // console.log(contextData, 'context data from timeLinePage');

    // directly destructuring korte chaile

    
    return (
        <div className="container mx-auto w-9/12 mt-20 mb-10">
            <h2 className="font-bold text-5xl mb-6">TimeLine</h2>

            <CallingInfos></CallingInfos>
            <TextingInfos></TextingInfos>
            <VideoCallInfos></VideoCallInfos>
        </div>
    );
};


export default TimeLinePage;