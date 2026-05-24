// custom hook to fetch friends data from friends.json 

import { useEffect, useState } from "react";

const useFriendsData = () => {

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

            setTimeout(() => {
                setAllFriendsData(data); //state er moddhe friends data 
                setIsLoading(false); //loading false
            }, 1500);


        };
        fetchData();
    }, []);


    return { allFriendsData, setAllFriendsData, isLoading, setIsLoading };
};

export default useFriendsData;