import { HashLoader } from "react-spinners";
import EachFriendCard from "./eachFriendCard/EachFriendCard";

const AllFriends = ({ allFriendsData, isLoading, }) => {
    return (
        <div className="font-semibold text-2xl space-y-4 container mx-auto mt-20">

            {
                isLoading ? (<div className="flex justify-center items-center min-h-screen"><HashLoader color="#244D3F" /></div>) :
                    (<>
                        <h2>Your Friends</h2>
                        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-6">

                            {
                                allFriendsData.map(friend => (
                                    <EachFriendCard friend={friend} key={friend.id}></EachFriendCard>
                                ))
                            }

                        </div>
                    </>)
            }

        </div>
    );
};

export default AllFriends;