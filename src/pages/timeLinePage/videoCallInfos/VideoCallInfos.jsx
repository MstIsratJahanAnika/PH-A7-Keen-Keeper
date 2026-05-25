import { useContext } from "react";
import { CommunicationTypeContext } from "../../../context/CommunicationTypeContext";

import VideoCallImg from '../../../assets/video.png';

const VideoCallInfos = () => {

    const { videoCallInfos, setVideoCallInfos } = useContext(CommunicationTypeContext);
    console.log(videoCallInfos, setVideoCallInfos, 'context data from timeLinePage');

    // add present date
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });

    return (
        <div>
            {
                videoCallInfos.map((videoCallInfo) => {
                    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = videoCallInfo;

                    return (
                        <div key={id} className="flex items-center gap-4 ml-4 shadow-sm p-4 rounded-lg bg-white mb-6">
                            <span>
                                <img src={VideoCallImg} alt={name} />
                            </span>

                            <div>
                                <p className="text-[18px] text-[#64748B]"><span className="font-semibold text-lg text-[#244D3F]">Video Call With</span> {name}</p>
                                <p className="text-[16px] text-[#64748B]">{currentDate}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
export default VideoCallInfos;