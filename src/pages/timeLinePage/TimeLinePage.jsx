import { IoIosArrowDown } from "react-icons/io";
import { CommunicationTypeContext } from "../../context/CommunicationTypeContext";
import CallingInfos from "./callingInfos/CallingInfos";
import TextingInfos from "./textingInfos/TextingInfos";
import VideoCallInfos from "./videoCallInfos/VideoCallInfos";
import { useContext, useState } from "react";



const TimeLinePage = () => {

    const { callingInfos, textingInfos, videoCallInfos } = useContext(CommunicationTypeContext);

    const noData = (callingInfos.length === 0 && textingInfos.length === 0 && videoCallInfos.length === 0);
    // context theke data access kora
    // const contextData = useContext(CommunicationTypeContext);
    // console.log(contextData, 'context data from timeLinePage');

    const AllData = [...callingInfos.map(item => ({ ...item, type: 'call' })),

    ...textingInfos.map(item => ({ ...item, type: 'text' })),

    ...videoCallInfos.map(item => ({ ...item, type: 'videoCall' })),
    ];

    // type wise sorting
    const [filterType, setFilterType] = useState('time');

    // sorting
    let sortedData = [...AllData];

    //only time wise sort
    if (filterType === 'time') {
        sortedData.sort((a, b) => b.createdAt - a.createdAt);
    }


    // calling type wise sort
    if (filterType === 'call') {
        sortedData = sortedData.filter(calling => calling.type === 'call');
    }
    if (filterType === 'text') {
        sortedData = sortedData.filter(calling => calling.type === 'text');
    }
    if (filterType === 'videoCall') {
        sortedData = sortedData.filter(calling => calling.type === 'videoCall');
    }


    return (
        <div className="container mx-auto min-h-[60vh] w-9/12 mt-20 mb-10">
            <h2 className="font-bold text-5xl mb-6">TimeLine</h2>

            {/* dropdown */}
            <div className="mb-6">
                {/* change popover-1 and --anchor-1 names. Use unique names for each dropdown */}
                {/* For TSX uncomment the commented types below */}
                <button className="text-[#64748B] flex gap-15 px-4 py-2 items-center border border-2 border-[#c1c5cc] rounded-md" popoverTarget="popover-1" style={{ anchorName: "--anchor-1" } /* as React.CSSProperties */}>
                    Filter TimeLine<IoIosArrowDown />
                </button>

                <ul className="dropdown menu w-52 rounded-box bg-base-100 shadow-sm"
                    popover="auto" id="popover-1" style={{ positionAnchor: "--anchor-1" } /* as React.CSSProperties */}>
                    <li onClick={() => setFilterType('time')} className="text-[#64748B] cursor-pointer"><a>Sort By Time</a></li>
                    <li onClick={() => setFilterType('call')} className="text-[#64748B] cursor-pointer"><a>Sort By Calling</a></li>
                    <li onClick={() => setFilterType('text')} className="text-[#64748B] cursor-pointer"><a>Sort By Texting</a></li>
                    <li onClick={() => setFilterType('videoCall')} className="text-[#64748B] cursor-pointer"><a>Sort By VideoCall</a></li>
                </ul>
            </div>


            {
                noData ? (<p className="text-center text-5xl text-[#244D3F] mt-40">No Data Found</p>) : (

                    sortedData.map((calling) => {


                        // sorting

                        // call er khetre 
                        if (calling.type === 'call') {
                            return (<CallingInfos key={calling.id} callingInfo={calling}></CallingInfos>);  //eta receive korte hobe 'props'
                        }

                        // texting er khetre sorting
                        if (calling.type === 'text') {
                            return (<TextingInfos key={calling.id} textingInfo={calling}></TextingInfos>);
                        }

                        // videoCall er khetre
                        if (calling.type === 'videoCall') {
                            return (
                                <VideoCallInfos key={calling.id} videoCallInfo={calling}></VideoCallInfos>
                            );
                        }
                    })
                )
            }
        </div>
    );
};


export default TimeLinePage;