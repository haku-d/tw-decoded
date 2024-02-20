/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

const user = {
  name: 'Tom Cook',
  email: 'tom@example.com',
  imageUrl:
    'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
};

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    current: true,
    icon: (
      <HomeIcon className="w-6 shrink-0 text-indigo-600 group-hover:text-indigo-600" />
    ),
  },
  {
    name: 'Team',
    href: '#',
    current: false,
    icon: (
      <UsersIcon className="w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" />
    ),
  },
  {
    name: 'Projects',
    href: '#',
    current: false,
    icon: (
      <FolderIcon className="w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" />
    ),
  },
  {
    name: 'Calendar',
    href: '#',
    current: false,
    icon: (
      <CalendarIcon className="w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" />
    ),
  },
  {
    name: 'Reports',
    href: '#',
    current: false,
    icon: (
      <ChartPieIcon className="w-6 shrink-0 text-gray-400 group-hover:text-indigo-600" />
    ),
  },
];

export default function Sidebar() {
  return (
    <div className="hidden lg:flex lg:flex-col lg:w-72 lg:z-50 lg:fixed lg:top-0 lg:bottom-0">
      <div className="flex flex-col grow gap-y-5 overflow-y-auto px-6 bg-white border-r border-gray-200">
        <header className="flex items-center shrink-0 h-16">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </header>
        <nav className="flex flex-1 flex-col">
          <ul role="list" className="flex flex-1 flex-col gap-y-7">
            <li>
              <ul role="list" className="-mx-2 space-y-1">
                {navigation.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className={clsx(
                        'group',
                        item.current
                          ? 'bg-gray-100 text-indigo-600'
                          : 'hover:bg-gray-100 hover:text-indigo-600',
                        'flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold'
                      )}
                      aria-current={item.current ? 'page' : undefined}
                    >
                      {item.icon}
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </li>
            <li>
              <div className="text-gray-400/80 leading-6 text-xs font-semibold">
                Your teams
              </div>
              <ul role="list" className="mt-2 -mx-2">
                <li>
                  <a
                    href="#"
                    className="rounded-md leading-6 text-sm font-medium p-2 text-gray-400/80 flex gap-x-3 hover:bg-gray-100 hover:text-gray-400"
                  >
                    <span className="rounded-lg text-xs font-medium ring-1 ring-gray-200 justify-center items-center shrink-0 h-6 w-6 flex">
                      H
                    </span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Heroicons
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-md leading-6 text-sm font-medium p-2 text-gray-400/80 flex gap-x-3 hover:bg-gray-100 hover:text-gray-400"
                  >
                    <span className="rounded-lg text-xs font-medium ring-1 ring-gray-200 justify-center items-center shrink-0 h-6 w-6 flex">
                      T
                    </span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Tailwind Labs
                    </span>
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="rounded-md leading-6 text-sm font-medium p-2 text-gray-400/80 flex gap-x-3 hover:bg-gray-100 hover:text-gray-400"
                  >
                    <span className="rounded-lg text-xs font-medium ring-1 ring-gray-200 justify-center items-center shrink-0 h-6 w-6 flex">
                      W
                    </span>
                    <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                      Workcation
                    </span>
                  </a>
                </li>
              </ul>
            </li>
            <li className="mt-auto -mx-6">
              <a
                href="#"
                className={clsx(
                  'hover:bg-gray-100',
                  'flex items-center gap-x-4 py-3 px-6 text-sm leading-6 font-semibold'
                )}
              >
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
                <span className="lg:flex lg:items-center hidden">
                  <span className="leading-6 font-medium text-sm">
                    {user.name}
                  </span>
                </span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
}
