import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PropTypes from "prop-types";

const DropdownMenu = ({ name, title }) => {
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "View profile", icon: "/icons/profile.svg", shortcut: "⌘K→P" },
    {
      label: "Account Settings",
      icon: "/icons/accountsettings.svg",
      shortcut: "⌘S",
    },
    { label: "Team", icon: "/icons/teamicon.svg", shortcut: "⌘K→T" },
    {
      label: "Invite colleagues",
      icon: "/icons/invitecolleagues.svg",
      shortcut: "⌘I",
    },
    { label: "Log out", icon: "/icons/logout.svg", shortcut: "⌥⌘Q" },
  ];

  return (
    <div className="relative w-60">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white shadow-md rounded-[20px] p-3 w-72"
      >
        <div className="bg-[#E6D4FF] text-[#6832B1] font-normal text-lg rounded-md w-10 h-10 flex items-center justify-center">
          DV
        </div>
        <div className="text-left ml-2">
          <div className="font-normal">{name}</div>
          <div className="text-[#9C9FA4] text-sm font-light">{title}</div>
        </div>
        <motion.svg
          className="w-4 h-4 text-[#9C9FA4] ml-auto"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </motion.svg>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute left-0 top-full mt-4 bg-white shadow-lg rounded-[20px] z-50 w-72"
            // Added mt-4 to increase the gap between the button and dropdown
          >
            <ul>
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-2 py-2 m-[7px] hover:bg-[#F6F7F9] hover:rounded-md hover:m-[7px] cursor-pointer group hover:font-medium"
                >
                  <div className="flex items-center space-x-3">
                    <div
                      className="w-[15px] h-[15px] bg-[#848588] group-hover:bg-black ml-[6px]"
                      style={{
                        maskImage: `url(${item.icon})`,
                        WebkitMaskImage: `url(${item.icon})`,
                        maskSize: "cover",
                        WebkitMaskSize: "cover",
                      }}
                    ></div>
                    <span className="text-[#848588] font-light group-hover:text-black group-hover:font-medium">
                      {item.label}
                    </span>
                  </div>
                  <span className="text-[#848588] font-light !text-sm group-hover:text-[#475467]">
                    {item.shortcut}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

DropdownMenu.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default DropdownMenu;
