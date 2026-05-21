import { NavLink } from "react-router";

const MyNavLink = ({to, children, Icon}) => {
    return (
        <NavLink to={to} 
            className={({isActive})=> 
                `flex items-center gap-2 rounded-sm px-4 py-2 
                ${isActive ? 'text-white bg-[#244D3F]': 'text-[#64748B]'}`}>
                    < Icon />
                        {children}
        </NavLink>
    );
};

export default MyNavLink;