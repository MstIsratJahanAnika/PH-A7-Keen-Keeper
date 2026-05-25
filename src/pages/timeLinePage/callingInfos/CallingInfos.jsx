import { useContext } from "react";
import { CommunicationTypeContext } from "../../../context/CommunicationTypeContext";

const CallingInfos = () => {

    const { callingInfos, setCallingInfos } = useContext(CommunicationTypeContext);
    console.log(callingInfos, setCallingInfos, 'context data from timeLinePage');

    return (
        <div>
            {
                callingInfos.map((callingInfo) => {
                    const { id, name, picture, email, days_since_contact, status, tags, bio, goal, next_due_date } = callingInfo;

                    return (
                        <div key={id}>
                            <span>
                                <img src={picture} alt={name} />
                            </span>

                            <div>
                                <p>{name}</p>
                                <p>{email}</p>
                            </div>
                        </div>
                    );
                })
            }
        </div>
    );
};
export default CallingInfos;