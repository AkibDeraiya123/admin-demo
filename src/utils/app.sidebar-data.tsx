import { BsArrowUpRightCircle, BsFillBookFill } from 'react-icons/bs';
import { CiImageOn } from 'react-icons/ci';
import { FaCalendar, FaMapMarked, FaUserPlus, FaUserSecret } from 'react-icons/fa';
import { GrContactInfo } from 'react-icons/gr';
import { LuServerCog, LuUserCheck2, LuUserSquare } from 'react-icons/lu';
import { MdSpaceDashboard } from 'react-icons/md';
import { RiChatSmileLine, RiFileGifLine } from 'react-icons/ri';

export const links = [
  {
    title: 'Dashboard',
    path: '/dashboard',
    pathnameInclude: 'dashboard',
    icon: <MdSpaceDashboard className='text-2xl' />,
  },
  {
    title: 'Our Expert',
    path: '/our-expert',
    pathnameInclude: 'our-expert',
    icon: <LuUserSquare className='text-2xl' />,
  },
  {
    title: 'Map',
    path: '/map',
    pathnameInclude: 'map',
    icon: <CiImageOn className='text-2xl' />,
  },
  {
    title: 'Survey',
    path: '/survey',
    pathnameInclude: 'survey',
    icon: <GrContactInfo className='text-2xl' />,
  },
  {
    title: 'Self Assessment',
    path: '/self-assessment',
    pathnameInclude: 'self-assessment',
    icon: <RiChatSmileLine className='text-2xl' />,
  },
  {
    title: 'Admins',
    path: '/admins',
    pathnameInclude: 'admins',
    icon: <LuServerCog className='text-2xl' />,
  },
  {
    title: 'B2B',
    path: '/b2b',
    pathnameInclude: 'b2b',
    icon: <FaCalendar className='text-2xl' />,
  },
  {
    title: 'Patterns',
    path: '/patterns',
    pathnameInclude: 'patterns',
    icon: <LuUserCheck2 className='text-2xl' />,
  },
  {
    title: 'Users',
    path: '/users',
    pathnameInclude: 'users',
    icon: <FaUserSecret className='text-2xl' />,
  },
  {
    title: 'Content Approval',
    path: '/content-approval',
    pathnameInclude: 'content-approval',
    icon: <FaUserPlus className='text-2xl' />,
  },
  {
    title: 'Management',
    path: '/management',
    pathnameInclude: 'management',
    icon: <FaMapMarked className='text-2xl' />,
  },
  {
    title: 'Push Notification',
    path: '/push-notifications',
    pathnameInclude: 'push-notifications',
    icon: <BsArrowUpRightCircle className='text-2xl' />,
  },
  {
    title: 'CMS',
    path: '/cms',
    pathnameInclude: 'cms',
    icon: <BsFillBookFill className='text-2xl' />,
  },
  {
    title: 'Config',
    path: '/config',
    pathnameInclude: 'config',
    icon: <RiFileGifLine className='text-2xl' />,
  },
  {
    title: 'App Feedback',
    path: '/app-feedback',
    pathnameInclude: 'app-feedback',
    icon: <FaMapMarked className='text-2xl' />,
  }
  
 
];
