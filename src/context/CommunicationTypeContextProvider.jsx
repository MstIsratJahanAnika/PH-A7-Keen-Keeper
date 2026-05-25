import { useState } from "react";
import { CommunicationTypeContext } from "./CommunicationTypeContext";

const CommunicationTypeContextProvider = ( { children } ) => {

     // friends communication states 
    // call state management
    const [callingInfos, setCallingInfos] = useState([]);

    const data = {
       callingInfos,
       setCallingInfos,
    }

    return (
        <CommunicationTypeContext.Provider value={data}>
            {children}
        </CommunicationTypeContext.Provider>
    );
};

export default CommunicationTypeContextProvider;