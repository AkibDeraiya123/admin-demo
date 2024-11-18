import DropdownNotification from './DropdownNotification';
import DropdownUser from './DropdownUser';
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdInformationCircleOutline } from "react-icons/io";

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
  heading: string
}) => {
  return (
    <header className="lg:sticky fixed top-0 left-0 z-999 lg:bg-slate-100 bg-white shadow-4 flex w-full drop-shadow-1 ">
      <div className="flex flex-grow items-center justify-between px-4 py-2 md:px-6 2xl:px-11">


        <div className="hidden sm:block">
          <h2 className="text-[24px] font-[500] flex items-center gap-1 text-black dark:text-white first-letter:uppercase">
            {props.heading ? props.heading : ''} <IoMdInformationCircleOutline className='font-light p-1' />
          </h2>
        </div>

        <div className="flex items-center lg:justify-normal justify-between w-full lg:w-auto gap-3 2xsm:gap-7">
          <ul className="flex items-center lg:gap-4">
            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Dark Mode Toggler --> */}

            {/* <!-- Notification Menu Area --> */}
            <DropdownNotification />
            {/* <!-- Notification Menu Area --> */}
            <DropdownUser />
          </ul>

          {/* <!-- User Area --> */}
          {/* <!-- User Area --> */}
          <div className="border rounded-full p-[6px] lg:hidden">
            <IoSettingsOutline className='text-2xl' />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
