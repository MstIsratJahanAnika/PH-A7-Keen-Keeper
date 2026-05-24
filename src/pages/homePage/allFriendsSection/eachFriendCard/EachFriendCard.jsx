import { Link } from "react-router";

const EachFriendCard = ({ friend }) => {

    // friend er data destructure
    const { id, name, picture, status, tags, days_since_contact } = friend;

    return (
        <Link key={id} to={`/friends/${id}`} className="bg-white p-4 rounded-lg shadow text-center">
            <img
                src={picture}
                alt={name}
                className="w-20 h-20 rounded-full mb-4 flex justify-center items-center mx-auto"
            />
            <h3 className="font-bold text-lg">{name}</h3>
            <p className="text-[#64748B] text-[12px]">{days_since_contact}d ago</p>

            {/* tags - array hishebe ase*/}
            <div className="flex-wrap gap-2 my-2 flex justify-center items-center">
                {tags.map((tag, index) => (
                    <span key={index} className="bg-[#CBFADB] text-[#244D3F] text-[12px] px-2 py-1 rounded-full">
                        {tag}
                    </span>
                ))}
            </div>

            {/* status badge */}
            <p className={`p-2 rounded-full text-[12px] w-fit text-white mx-auto 
                ${status === 'overdue' ? 'bg-[#EF4444]' : status === 'almost due' ? 'bg-[#EFAD44]' : status === 'on-track' ? 'bg-[#244D3F]' : ''}`}>
                    {status}
            </p>
        </Link>
    );
};

export default EachFriendCard;