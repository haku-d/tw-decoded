/* eslint-disable @next/next/no-img-element */
import { useState, Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import clsx from 'clsx';
import {
  Cog6ToothIcon,
  Bars3Icon,
  XMarkIcon,
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  ChartPieIcon,
} from '@heroicons/react/24/outline';

const navigation = [
  {
    name: 'Dashboard',
    href: '#',
    current: true,
    icon: <HomeIcon className="w-6 shrink-0 text-gray-400" />,
  },
  {
    name: 'Team',
    href: '#',
    current: false,
    icon: <UsersIcon className="w-6 shrink-0 text-gray-400" />,
  },
  {
    name: 'Projects',
    href: '#',
    current: false,
    icon: <FolderIcon className="w-6 shrink-0 text-gray-400" />,
  },
  {
    name: 'Calendar',
    href: '#',
    current: false,
    icon: <CalendarIcon className="w-6 shrink-0 text-gray-400" />,
  },
  {
    name: 'Reports',
    href: '#',
    current: false,
    icon: <ChartPieIcon className="w-6 shrink-0 text-gray-400" />,
  },
];

export default function Topbar() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div className="lg:hidden flex items-center gap-x-4 h-16 z-40 sticky top-0 px-4 bg-white ring-b ring-gray-300 lg:px-8 md:px-6 md:gap-x-6 shadow">
      <button type="button" className="lg:hidden p-1 -m-1" onClick={openModal}>
        <Bars3Icon className="w-6 h-6" />
      </button>
      <div className="block lg:hidden bg-gray-200 w-px h-6"></div>
      <div className="flex flex-1 items-center leading-6 font-semibold">
        Dashboard
      </div>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/70" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-out duration-300"
              enterFrom="opacity-0 transform -translate-x-72"
              enterTo="opacity-100 transform translate-x-0"
              leave="transition ease-in duration-300"
              leaveFrom="opacity-100 transform translate-x-0"
              leaveTo="opacity-0 transform -translate-x-72"
            >
              <Dialog.Panel className="relative flex flex-1 w-full max-w-xs mr-16">
                <div className="absolute flex top-0 left-full w-16 justify-center pt-6">
                  <button
                    type="button"
                    className="text-white p-2.5 -m-2.5"
                    onClick={closeModal}
                  >
                    <XMarkIcon className="w-6 h-6" />
                  </button>
                </div>
                <div className="flex flex-col overflow-y-auto gap-y-5 px-6 pt-4 grow bg-gray-900">
                  <div className="flex h-16 shrink-0 items-center">
                    <img
                      className="w-auto h-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=white"
                      alt="Your Company"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul role="list" className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul role="list" className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                href={item.href}
                                className={clsx(
                                  item.current
                                    ? 'bg-gray-800 text-white'
                                    : 'text-white/80 hover:bg-gray-800 hover:text-white',
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
                        <div className="text-white/80 leading-6 text-sm font-semibold">
                          Your teams
                        </div>
                        <ul role="list" className="mt-2 -mx-2">
                          <li>
                            <a
                              href="#"
                              className="rounded-md leading-6 text-sm font-medium p-2 text-white/80 flex gap-x-3 hover:bg-gray-800 hover:text-white"
                            >
                              <span className="rounded-lg text-xs font-medium ring-1 ring-white/80 justify-center items-center shrink-0 h-6 w-6 flex">
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
                              className="rounded-md leading-6 text-sm font-medium p-2 text-white/80 flex gap-x-3 hover:bg-gray-800 hover:text-white"
                            >
                              <span className="rounded-lg text-xs font-medium ring-1 ring-white/80 justify-center items-center shrink-0 h-6 w-6 flex">
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
                              className="rounded-md leading-6 text-sm font-medium p-2 text-white/80 flex gap-x-3 hover:bg-gray-800 hover:text-white"
                            >
                              <span className="rounded-lg text-xs font-medium ring-1 ring-white/80 justify-center items-center shrink-0 h-6 w-6 flex">
                                W
                              </span>
                              <span className="overflow-hidden text-ellipsis whitespace-nowrap">
                                Workcation
                              </span>
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <a
                          href="#"
                          className={clsx(
                            'text-white/80 hover:bg-gray-800 hover:text-white',
                            'flex gap-x-3 -mx-2 rounded-md p-2 text-sm leading-6 font-semibold'
                          )}
                        >
                          <Cog6ToothIcon className="w-6 shrink-0" />
                          Settings
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
}
