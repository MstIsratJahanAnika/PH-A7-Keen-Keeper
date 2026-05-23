import EachFriendCard from "./eachFriendCard/EachFriendCard";

const AllFriends = ({ allFriendsData, setAllFriendsData, isLoading, setIsLoading }) => {
    return (
        <div className="font-semibold text-2xl space-y-4 container mx-auto mt-20">
            <h2>Your Friends</h2>

            {/* dynamic friends data */}
            <div className="grid grid-cols-4 gap-6">
                {/* cards */}
                {
                    allFriendsData.map(friend => {

                        return (
                            <EachFriendCard key={friend.id} friend={friend}></EachFriendCard>
                        );
                    })
                }

            </div>
        </div>
    );
};

export default AllFriends;