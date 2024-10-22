import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaUser, FaCog, FaUsers, FaEnvelope, FaSignOutAlt } from "react-icons/fa"; 
import PropTypes from 'prop-types';

const DropdownMenu = ({ name, title }) => { 
  const [isOpen, setIsOpen] = useState(false);

  const menuItems = [
    { label: "View profile", icon: <FaUser />, shortcut: "⌘K" },
    { label: "Account Settings", icon: <FaCog />, shortcut: "⌘S" },
    { label: "Team", icon: <FaUsers />, shortcut: "⌘T" },
    { label: "Invite colleagues", icon: <FaEnvelope />, shortcut: "⌘I" },
    { label: "Log out", icon: <FaSignOutAlt />, shortcut: "⌘Q" },
  ];

  return (
    <div className="relative w-72">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center bg-white shadow-md rounded-lg p-3 w-full"
      >
        <div className="bg-purple-400 text-black font-normal rounded-md w-10 h-10 flex items-center justify-center">
          DV
        </div>
        <div className="text-left ml-2">
          <div className="font-normal">{name}</div> 
          <div className="text-gray-400 text-sm">{title}</div> 
        </div>
        <motion.svg
          className="w-4 h-4 text-gray-600 ml-auto"
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
            className="absolute left-0 top-full mt-2 w-full bg-white shadow-lg rounded-xl z-50"
          >
            <ul className="py-2">
              {menuItems.map((item, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center px-4 py-2 hover:bg-gray-100 cursor-pointer group" 
                >
                  <div className="flex items-center space-x-3">
                    <span className="text-gray-400 group-hover:text-black">{item.icon}</span>
                    <span className="text-gray-400 font-light group-hover:text-black">{item.label}</span> 
                  </div>
                  <span className="text-gray-400 text-sm group-hover:text-black">{item.shortcut}</span> 
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
