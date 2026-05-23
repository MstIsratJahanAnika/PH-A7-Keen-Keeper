import { GoPlus } from "react-icons/go";
import StateCard from "./StateCard";
import { useEffect, useState } from "react";
import AllFriends from "./allFriendsSection/AllFriends";


const HomePage = () => {

    // friends data state er moddhe set korar jonno
    const [allFriendsData, setAllFriendsData] = useState([]);

    // for loading fallback
    const [isLoading, setIsLoading] = useState(true);

    // data fetching 
    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('/friends.json');
            const data = await response.json();
            console.log(data);

            setAllFriendsData(data); //state er moddhe friends data 
            setIsLoading(false); //loading false

        };
        fetchData();
    }, []);

    const onTrackFriends = allFriendsData.filter(
        friend => friend.status === "on-track"
    );

    // half-static part 
    const stateData = [
        {
            id: 1,
            value: allFriendsData.length,
            title: "Total Friends",
        },
        {
            id: 2,
            value: onTrackFriends.length,
            title: "On Track",
        },
        {
            id: 3,
            value: 6,
            title: "Need Attention",
        },
        {
            id: 4,
            value: 12,
            title: "Interactions This Month",
        },
    ];


    console.log(allFriendsData, 'friends data from home page');
    console.log(isLoading, 'is loading from home page');


    return (
        <div className="container mx-auto mt-20 space-y-10 w-9/12">
            <div className="text-center space-y-4 flex flex-col justify-center items-center">
                <h2 className="text-[#1F2937] font-bold text-5xl">Friends to keep close in your life</h2>

                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>

                <button className="bg-[#244D3F] p-3 rounded-sm flex justify-center items-center text-white mt-4 cursor-pointer"><GoPlus />Add a Friend</button>
            </div>

            <div className="grid grid-cols-4 gap-6 mb-10">

                {stateData.map((state) => (
                    <StateCard key={state.id} value={state.value} title={state.title}></StateCard>
                ))}
            </div>

            <div className="text-[#babbbd]">
                <hr />
            </div>

            {/* dynamic content part */}
            <div>
                <AllFriends allFriendsData={allFriendsData} setAllFriendsData={setAllFriendsData} isLoading={isLoading} setIsLoading={setIsLoading}></AllFriends>
            </div>
        </div>
    );
};

export default HomePage;