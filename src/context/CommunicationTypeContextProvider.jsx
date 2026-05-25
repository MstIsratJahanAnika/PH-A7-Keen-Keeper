import { useState } from "react";
import { CommunicationTypeContext } from "./CommunicationTypeContext";

const CommunicationTypeContextProvider = ( { children } ) => {

     // friends communication states 
    // call state management
    const [callingInfos, setCallingInfos] = useState([]);

    // text state management
    const [textingInfos, setTextingInfos] = useState([]);

    // video call state management
    const [videoCallInfos, setVideoCallInfos] = useState([]);

    const data = {
       callingInfos,
       setCallingInfos,
       textingInfos,
       setTextingInfos,
       videoCallInfos,
       setVideoCallInfos
    }

    return (
        <CommunicationTypeContext.Provider value={data}>
            {children}
        </CommunicationTypeContext.Provider>
    );
};

export default CommunicationTypeContextProvider;