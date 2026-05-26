import { useContext } from "react";
import { CommunicationTypeContext } from "../../../context/CommunicationTypeContext";

import callingImg from '../../../assets/call.png';

const CallingInfos = ({callingInfo}) => {

    const { callingInfos, setCallingInfos } = useContext(CommunicationTypeContext);
    console.log(callingInfos, setCallingInfos, 'context data from timeLinePage');
    
    // add present date
    const currentDate = new Date().toLocaleDateString("en-US", {
        month: "long",
        day: "numeric",
        year: "numeric",
    });
    
    const { id, name } = callingInfo;



    return (
        <div key={id} className="flex items-center gap-4 ml-4 shadow-sm p-4 rounded-lg bg-white mb-6">
            <span>
                <img src={callingImg} alt={name} />
            </span>

            <div>
                <p className="text-[16px] md:text-[18px] text-[#64748B]"><span className="font-semibold text-lg text-[#244D3F]">Call With</span> {name}</p>
                <p className="text-[14px] md:text-[16px] text-[#64748B]">{currentDate}</p>
            </div>
        </div>
    );

}
export default CallingInfos;