/* eslint-disable @next/next/no-img-element */
'use client';
import React, { Fragment, useState } from 'react';
import clsx from 'clsx';
import {
  HomeIcon,
  UsersIcon,
  FolderIcon,
  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline';
import { Menu, Dialog, Transition } from '@headlessui/react';

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
    icon: <HomeIcon className="w-6 shrink-0" />,
  },
  {
    name: 'Team',
    href: '#',
    current: false,
    icon: <UsersIcon className="w-6 shrink-0" />,
  },
  {
    name: 'Projects',
    href: '#',
    current: false,
    icon: <FolderIcon className="w-6 shrink-0" />,
  },
  {
    name: 'Calendar',
    href: '#',
    current: false,
    icon: <CalendarIcon className="w-6 shrink-0" />,
  },
  {
    name: 'Reports',
    href: '#',
    current: false,
    icon: <ChartPieIcon className="w-6 shrink-0" />,
  },
];

const userNavigation = [
  { name: 'Your Profile', href: '#' },
  { name: 'Settings', href: '#' },
  { name: 'Sign out', href: '#' },
];

export default function NarrowSidebar2Col() {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <div>
      <div className="hidden lg:fixed lg:top-0 lg:bottom-0 lg:left-0 lg:z-50 lg:block lg:w-20 lg:overflow-y-auto lg:bg-gray-900 lg:pb-4">
        <div className="flex items-center justify-center shrink-0 h-16">
          <img
            className="h-8 w-auto"
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
            alt="Your Company"
          />
        </div>
        <nav className="flex flex-1 flex-col mt-8">
          <ul role="list" className="flex items-center flex-col space-y-1">
            {navigation.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className={clsx(
                    item.current
                      ? 'bg-gray-800 text-white'
                      : 'text-white/80 hover:bg-gray-800 hover:text-white',
                    'flex items-center justify-center rounded-md p-3 text-sm leading-6 font-semibold'
                  )}
                  aria-current={item.current ? 'page' : undefined}
                >
                  {item.icon}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {/* Top header bar */}
      <div className="lg:hidden flex items-center gap-x-4 h-16 z-40 sticky top-0 px-4 bg-gray-800 ring-b ring-gray-300 lg:px-8 md:px-6 md:gap-x-6 shadow">
        <button
          type="button"
          className="lg:hidden p-1 -m-1 text-gray-400"
          onClick={openModal}
        >
          <Bars3Icon className="w-6 h-6" />
        </button>
        <div className="font-semibold leading-6 flex-1 text-sm text-gray-200">
          Dashboard
        </div>
        <div className="flex gap-x-4 lg:gap-x-6">
          <div className="flex items-center gap-x-4 lg:gap-x-6">
            <button
              type="button"
              className="p-1 -m-1 text-gray-400 hover:text-gray-700"
            >
              <BellIcon className="w-6 h-6" />
            </button>
            <Menu as="div" className="relative">
              <Menu.Button className="relative flex max-w-xs items-center text-sm p-1.5 -mx-1.5">
                <span className="absolute -inset-1.5" />
                <span className="sr-only">Open user menu</span>
                <img
                  className="h-8 w-8 rounded-full"
                  src={user.imageUrl}
                  alt=""
                />
              </Menu.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
              >
                <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  {userNavigation.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }) => (
                        <a
                          href={item.href}
                          className={clsx(
                            active ? 'bg-gray-100' : '',
                            'block px-4 py-2 text-sm text-gray-700'
                          )}
                        >
                          {item.name}
                        </a>
                      )}
                    </Menu.Item>
                  ))}
                </Menu.Items>
              </Transition>
            </Menu>
          </div>
        </div>
      </div>
      {/* main */}
      <main className="lg:pl-20">
        <div className="xl:pl-96">
          <div className="lg:px-8 py-6 md:px-6 px-4">
            <div className="relative h-[672px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
              <svg
                className="absolute inset-0 h-full w-full stroke-gray-900/10"
                fill="none"
              >
                <defs>
                  <pattern
                    id="pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a"
                    x="0"
                    y="0"
                    width="10"
                    height="10"
                    patternUnits="userSpaceOnUse"
                  >
                    <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
                  </pattern>
                </defs>
                <rect
                  stroke="none"
                  fill="url(#pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a)"
                  width="100%"
                  height="100%"
                ></rect>
              </svg>
            </div>
          </div>
        </div>
      </main>
      <aside className="fixed hidden top-0 bottom-0 left-20 xl:block lg:px-8 py-6 sm:px-6 px-4 w-96 overflow-y-auto border-r border-gray-200">
        <div className="relative h-[672px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
          <svg
            className="absolute inset-0 h-full w-full stroke-gray-900/10"
            fill="none"
          >
            <defs>
              <pattern
                id="pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a"
                x="0"
                y="0"
                width="10"
                height="10"
                patternUnits="userSpaceOnUse"
              >
                <path d="M-3 13 15-5M-5 5l18-18M-1 21 17 3"></path>
              </pattern>
            </defs>
            <rect
              stroke="none"
              fill="url(#pattern-d09edaee-fc6a-4f25-aca5-bf9f5f77e14a)"
              width="100%"
              height="100%"
            ></rect>
          </svg>
        </div>
      </aside>
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
                      className="h-8 w-8"
                      src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
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
