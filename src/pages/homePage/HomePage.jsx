import { GoPlus } from "react-icons/go";
import StateCard from "./StateCard";

// half-static part 
const stateData = [
    {
        id: 1,
        value: 10,
        title: "Total Friends",
    },
    {
        id: 2,
        value: 3,
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

const HomePage = () => {
    return (
        <div className="container mx-auto mt-20 space-y-10 w-9/12">
            <div className="text-center space-y-4 flex flex-col justify-center items-center">
                <h2 className="text-[#1F2937] font-bold text-5xl">Friends to keep close in your life</h2>

                <p className="text-[#64748B]">Your personal shelf of meaningful connections. Browse, tend, and nurture the <br />
                    relationships that matter most.
                </p>

                <button className="bg-[#244D3F] p-3 rounded-sm flex justify-center items-center text-white mt-4"><GoPlus />Add a Friend</button>
            </div>

            <div className="grid grid-cols-4 gap-6">
                {stateData.map((stat) => (
                        <StateCard key={stat.id} value={stat.value} title={stat.title}></StateCard>
                ))}
            </div>

            {/* dynamic content part */}
            <div>

            </div>
        </div>
    );
};

export default HomePage;