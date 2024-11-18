import { useEffect, useRef, useState } from 'react';
import { NavLink } from 'react-router-dom';
import SidebarLink from './SidebarLink';
import { links } from '@/utils/app.sidebar-data';
import { GrClose } from 'react-icons/gr';
import DarkModeSwitcher from '../Header/DarkModeSwitcher';
import { AiOutlineLogout } from "react-icons/ai";
import { useCurrentUser } from '@/context/userContext';
import useColorMode from '@/hooks/useColorMode';
import PhoneMockUp from '@/static/images/logo/logo-icon.svg';

interface SidebarProps {
  sidebarOpen: boolean;
  setSidebarOpen: (arg: boolean) => void;
}

const Sidebar = ({ sidebarOpen, setSidebarOpen }: SidebarProps) => {
  const { logOutUser } = useCurrentUser();
  const [colorMode, setColorMode] = useColorMode();

  const trigger = useRef<any>(null);
  const sidebar = useRef<any>(null);

  const storedSidebarExpanded = localStorage.getItem('sidebar-expanded');
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === 'true',
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }: MouseEvent) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }: KeyboardEvent) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  useEffect(() => {
    localStorage.setItem('sidebar-expanded', sidebarExpanded.toString());
    if (sidebarExpanded) {
      document.querySelector('body')?.classList.add('sidebar-expanded');
    } else {
      document.querySelector('body')?.classList.remove('sidebar-expanded');
    }
  }, [sidebarExpanded]);

  return (
    <aside
      ref={sidebar}
      className={`relative rounded shadow-6 left-0 lg:top-0 top-24 z-99 flex max-h-screen w-19 lg:w-72.5 flex-col overflow-y-hidden bg-white duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className="hidden lg:flex items-center justify-between gap-2 px-6 ">
        <NavLink to="/">
          <span className="inline-block h-19 w-39">
            <img src={PhoneMockUp} alt="phone-mockup" className='h-full w-full' />
          </span>
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls="sidebar"
          aria-expanded={sidebarOpen}
          className="block lg:hidden"
        >
          <GrClose className='text-gray' />
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className="no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear">
        {/* <!-- Sidebar Menu --> */}
        <nav className="mt-1 lg:py-4 lg:px-6">
          <div>
            <ul className="mb-6 flex flex-col">
              {links.map((link, index) => (
                <SidebarLink key={index} link={link} />
              ))}
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
      <div className="hidden lg:block w-full bg-white px-6">
        <div className="mt-1 lg:py-4 border-t ">
          <div className="py-2 flex w-full">
            <DarkModeSwitcher />
          </div>
          <div className="ml-4 mt-4">
            <button
              className="flex gap-4 py-2 font-medium duration-300 ease-in-out hover:text-blue-200"
              onClick={() => logOutUser()}>
              <AiOutlineLogout className='text-2xl' />
              Log Out
            </button>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
