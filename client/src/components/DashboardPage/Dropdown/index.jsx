import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";


export default function MyDropdown() {

  const navigate = useNavigate();

  const logOut = function (event) {
    event.preventDefault();
       axios
      .get("/logout")
      .then(() => {
        navigate("/login");
      });
      
  }

  return (
    <Menu as="div" className="relative inline-block">
      <div>
        <Menu.Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-7 mt-3  text-sm font-medium text-white bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Menu.Button>
      </div>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 w-64 mt-2 origin-top-center bg-gradient-to-r from-black to-blue-800 divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="px-1 py-1 ">
            <Menu.Item>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-white"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Generate a new memoir
                </button>
              )}
            </Menu.Item>
            <Menu.Item disabled>
              {({ active }) => (
                <button
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-white"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Logged in as Legend
                </button>
              )}
            </Menu.Item>
          </div>
          <div className="px-1 py-1">
            <Menu.Item>
              {({ active }) => (
                <button onClick={(e) => logOut(e)}
                  className={`${
                    active ? "bg-violet-500 text-white" : "text-white"
                  } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                >
                  Log-out
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

function EditInactiveIcon(props) {
  return (
    <svg
      {...props}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 13V16H7L16 7L13 4L4 13Z"
        fill="#EDE9FE"
        stroke="#A78BFA"
        strokeWidth="2"
      />
    </svg>
  );
}
