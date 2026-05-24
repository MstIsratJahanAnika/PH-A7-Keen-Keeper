import { useParams } from "react-router";
import useFriendsData from "./customHookDataFetching/useFriendsData";
import ErrorPage from "../errorPage/ErrorPage";
import { HashLoader } from "react-spinners";
import { RiDeleteBinLine, RiNotificationSnoozeLine, RiVideoOnLine } from "react-icons/ri";
import { FiArchive } from "react-icons/fi";
import { PiChatTextBold } from "react-icons/pi";
import { BiPhoneCall } from "react-icons/bi";

const DetailPage = () => {
    const { id } = useParams();
    console.log(id, 'id from DetailPage');

    const { allFriendsData, isLoading } = useFriendsData();
    console.log(allFriendsData, isLoading);

    // jotokkhon data load hobe, totokkhon loading spinner dekhabe
    if (isLoading) {
        return <div className="flex justify-center items-center min-h-screen">
            <HashLoader color="#244D3F" />
        </div>
    }

    const expectedFriend = allFriendsData.find(friend => friend.id == id);
    console.log(expectedFriend, 'expected friend from DetailPage');

    // jodi expected friend na pay tahole error page dekhabe
    if (!expectedFriend) {
        return <ErrorPage></ErrorPage>
    }

    const { id: friendId, name, picture, status, tags, days_since_contact, bio, next_due_date, goal, email, } = expectedFriend;
    return (
        <div className="w-9/12 flex gap-6 mx-auto my-10 flex-col md:flex-row">
            <div className="space-y-4">
                <div className="flex flex-col text-center shadow bg-white py-5 px-5 rounded-lg">
                    <img src={picture} alt={name} className="w-20 h-20 rounded-full mx-auto" />
                    <h3 className="text-xl font-semibold my-3">{name}</h3>

                    <p className={`p-2 rounded-full text-[12px] w-fit text-white mx-auto 
                        ${status === 'overdue' ? 'bg-[#EF4444]' : status === 'almost due' ? 'bg-[#EFAD44]' : status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>
                        {status}
                    </p>
                    <p className="flex flex-wrap gap-2 mt-2 justify-center items-center">
                        {
                            tags.map((tag, index) => (
                                <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[12px] p-2 rounded-[100px]">
                                    {tag}
                                </span>
                            ))
                        }
                    </p>
                    <p className="text-[#64748B] my-3">{bio}</p>
                    <p className="text-[#64748B] text-[14px]"><span className="font-semibold">Email:</span> {email}</p>
                </div>

                <div className="space-y-4">
                    <span className="flex items-center gap-2 py-4 bg-white shadow rounded-lg justify-center">
                        <RiNotificationSnoozeLine />Snooze 2 weeks
                    </span>
                    <span className="flex items-center gap-2 py-4 bg-white shadow rounded-lg justify-center">
                        <FiArchive />Archive
                    </span>
                    <span className="flex items-center gap-2 py-4 bg-white shadow rounded-lg text-red-500 justify-center">
                        <RiDeleteBinLine />Delete
                    </span>
                </div>
            </div>
            
            <div className="flex-1 space-y-6">
                <div className="grid grid-cols-3 gap-6 shadow rounded-lg p-6">
                    <div className="flex flex-col items-center justify-center gap-2 border bg-white border-[#E2E8F0] rounded-lg py-4 text-[#244D3F] font-semibold text-[30px]">
                        {days_since_contact} 
                        <span className="text-[#64748B] text-[18px]">Days Since Contact</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 border bg-white border-[#E2E8F0] rounded-lg py-4 text-[#244D3F] font-semibold text-[30px]">
                        {goal}
                        <span className="text-[#64748B] text-[18px]">Goal (Days)</span>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 border bg-white border-[#E2E8F0] rounded-lg py-4 text-[#244D3F] font-semibold text-[30px]">
                        {next_due_date}
                        <span className="text-[#64748B] text-[18px]">Next Due Date</span>
                    </div>
                </div>

                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                    <div className="flex justify-between items-center">
                        <h4 className="text-[18px] text-[#244D3F]">Relationship Goal</h4>
                        <button className="bg-[#F8FAFC] text-[#244D3F] py-2 px-4 rounded-lg hover:bg-[#c6d4cd]">
                            Edit
                        </button>
                    </div>
                    <p className="text-[#64748B]">Connect every <span className="font-semibold text-[#1F2937]">{goal} days</span></p>
                </div>

                <div className="bg-white shadow rounded-lg p-6 space-y-4">
                    <h3 className="text-[#244D3F] text-xl">Quick Check-In</h3>
                    <div className="grid grid-cols-3 gap-4">
                        <p className="py-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg flex flex-col items-center justify-center gap-2"><BiPhoneCall className="text-xl" />Call</p>                        
                        <p className="py-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg flex flex-col items-center justify-center gap-2"><PiChatTextBold />Text</p>
                        <p className="py-4 bg-[#F8FAFC] border border-[#CBD5E1] rounded-lg flex flex-col items-center justify-center gap-2"><RiVideoOnLine />Video</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DetailPage;