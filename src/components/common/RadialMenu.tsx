"use client"
import React, { useState } from 'react';
import { Home, MenuIcon, Settings, User } from 'lucide-react'; 

[
    'icon-home',
    'icon-settings',
    'icon-user',
    'icon-bell',
    'icon-heart',
    'icon-message',
  ]


const menuIcons = [
    {
        icon: <Home/>
    },
    {
        icon: <Settings/>
    },
    {
        icon: <User/>
    },
    {
        icon: <User/>
    },
    {
        icon: <User/>
    },
    {
        icon: <User/>
    },
    {
        icon: <User/>
    }
]

const RadialMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
      <div className="flex items-center justify-center h-16 text-white">
        <div
          onClick={toggleMenu}
          className="absolute z-50 w-10 h-10 bg-gray-600 rounded-full cursor-pointer flex items-center justify-center"
        >
          <MenuIcon size={24} className="text-white" />
        </div>
        {isOpen && (
          <div
            className="absolute top-0 left-0 w-full min-h-screen inset-0 flex items-center justify-center bg-black bg-opacity-50"
            onClick={toggleMenu}
          >
            <div className="bg-white rounded-lg p-8 shadow-lg">
              <ul className="flex flex-wrap justify-center gap-4">
                {menuIcons.map((icon, index) => (
                  <li
                    key={index}
                    className="flex items-center justify-center w-16 h-16 bg-gray-200 rounded-full"
                    style={{
                      transform: `rotate(${index * (360 / 6)}deg) translateX(6rem)`,
                    }}
                  >
                    {icon.icon}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
  );
};

export default RadialMenu;
