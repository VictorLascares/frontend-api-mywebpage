import { NavLink } from "react-router-dom";

export const NavItem = ({ link }) => {
    return (
        <li>
            <NavLink
                to={link.url}
                className={(args) => `${args.isActive ? 'text-white' : 'text-gray-400'}`}
            >{ link.link }</NavLink>
        </li>
    );
};