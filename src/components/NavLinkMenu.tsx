import { memo } from "react";
import { NavLink } from "react-router-dom";

interface Props {
  onClick: () => void;
  to: string;
  icon: string;
  title: string;
}

const NavLinkMenu = ({ onClick, to, icon, title }: Props) => {
  return (
    <li className="nav-item">
      <NavLink
        className={({ isActive }) => `nav-link ${isActive && "nav_select"}`}
        aria-current="page"
        to={to}
        onClick={onClick}
      >
        <i className={icon}></i> {title}
      </NavLink>
    </li>
  );
};

export default memo(NavLinkMenu);
