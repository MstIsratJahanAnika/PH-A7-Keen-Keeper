import { useContext, useState } from "react";
import { Legend, Pie, PieChart, Tooltip } from "recharts";
import { CommunicationTypeContext } from "../../context/CommunicationTypeContext";
import { HashLoader } from "react-spinners";
import useFriendsData from "../homePage/customHookDataFetching/useFriendsData";

const StatsPage = () => {

    // context theke data niye asho

    // calling
    const { callingInfos } = useContext(CommunicationTypeContext);

    // texting
    const { textingInfos } = useContext(CommunicationTypeContext);

    // video call
    const { videoCallInfos } = useContext(CommunicationTypeContext);

    // custom hook call
    const { allFriendsData, isLoading } = useFriendsData();
    console.log(allFriendsData);

    // spinner
    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen"><HashLoader color="#244D3F" /></div>;
    }

    // total communication
    const totalCommunication = (callingInfos.length + textingInfos.length + videoCallInfos.length);


    // chart data
    const data = [
        { name: 'Call', value: callingInfos.length, fill: '#244D3F'},
        { name: 'Text', value: textingInfos.length, fill: '#7E35E1'},
        { name: 'Video', value: videoCallInfos.length, fill: '#37A163'},
    ];

    return (
        <div>
            <h2 className="text-5xl font-bold text-[#1F2937]">Friendship Analytics</h2>

            <div className="my-20 rounded-md border border-slate-300 py-10 container mx-auto px-20 bg-white">
                <h3 className="text-[#244D3F] font-semibold my-6">By Interaction Type</h3>

                {
                    totalCommunication === 0? (
                        <h2 className="text-center text-3xl font-semibold text-gray-500 min-h-[60vh] pt-30">No Communication Occurred</h2>
                    ): (<PieChart style={{ width: '100%', maxWidth: '500px', margin: 'auto', maxHeight: '80vh', aspectRatio: 1 }} responsive>
                    <Pie
                        data={data}
                        innerRadius="80%"
                        outerRadius="100%"
                        // Corner radius is the rounded edge of each pie slice
                        cornerRadius="50%"
                        fill="#8884d8"
                        // padding angle is the gap between each pie slice
                        paddingAngle={5}
                        dataKey="value"
                        isAnimationActive={true}
                    />
                    {/* <RechartsDevtools /> */}
                    <Legend />
                    <Tooltip />

                </PieChart>)
                }
            </div>
        </div>
    );

};

export default StatsPage;