import { GoPlus } from "react-icons/go";
import StateCard from "./StateCard";
import AllFriends from "./allFriendsSection/AllFriends";
import useFriendsData from "./customHookDataFetching/useFriendsData";


const HomePage = () => {

    // custom hook use kore data fetching and state management
    const { allFriendsData, setAllFriendsData, isLoading, setIsLoading } = useFriendsData();

    const onTrackFriends = allFriendsData.filter(
        friend => friend.status === "on-track"
    );

    const needAttentionFriends = allFriendsData.filter(
        friend => friend.status === "overdue"
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
            value: needAttentionFriends.length,
            title: "Need Attention",
        },
        {
            id: 4,
            value: allFriendsData.length,
            title: "Interactions This Month",
        },
    ];


    console.log(allFriendsData, 'friends data from home page');
    console.log(isLoading, 'is loading from home page');


    return (
        <div className="container mx-auto mt-20 space-y-10 w-9/12">
            <div className="text-center space-y-4 flex flex-col justify-center items-center">
                <h2 className="text-[#1F2937] font-bold text-3xl md:text-4xl lg:text-5xl">Friends to keep close in your life</h2>

                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>

                <button className="bg-[#244D3F] p-3 rounded-sm flex justify-center items-center text-white mt-4 cursor-pointer"><GoPlus />Add a Friend</button>
            </div>

            <div className="grid grid-cols-2  md:grid-cols-4 gap-6 mb-10">

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