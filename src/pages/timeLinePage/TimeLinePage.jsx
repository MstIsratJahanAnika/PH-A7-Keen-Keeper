import { CommunicationTypeContext } from "../../context/CommunicationTypeContext";
import CallingInfos from "./callingInfos/CallingInfos";
import TextingInfos from "./textingInfos/TextingInfos";
import VideoCallInfos from "./videoCallInfos/VideoCallInfos";
import { useContext } from "react";



const TimeLinePage = () => {

    const { callingInfos, textingInfos, videoCallInfos } = useContext(CommunicationTypeContext);

    const noData =
        callingInfos.length === 0 &&
        textingInfos.length === 0 &&
        videoCallInfos.length === 0;
    // context theke data access kora
    // const contextData = useContext(CommunicationTypeContext);
    // console.log(contextData, 'context data from timeLinePage');

    // directly destructuring korte chaile

    return (
        <div className="container mx-auto min-h-[60vh] w-9/12 mt-20 mb-10">
            <h2 className="font-bold text-5xl mb-6">TimeLine</h2>
            {
                noData ?
                    (
                        <p className="text-center text-5xl text-[#244D3F] mt-40">No Data Found</p>
                    ) : (
                        <>
                            <CallingInfos></CallingInfos>
                            <TextingInfos></TextingInfos>
                            <VideoCallInfos></VideoCallInfos>
                        </>
                    )
            }
        </div>
    );
};


export default TimeLinePage;