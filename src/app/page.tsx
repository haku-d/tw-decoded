'use client';
import React from 'react';

export default function Index() {
  return (
    <main className="relative mx-auto w-full max-w-container space-y-20 px-4 pt-20 sm:px-6 lg:px-8 pb-20">
      <h2 className="mt-12 text-xl">
        Let&apos;s <b>unlock</b> tailwind components and <b>build</b> beautiful
        applications
      </h2>
      <section className="">
        <h2 className="text-xl font-bold text-slate-900">Application UI</h2>
        <p className="mt-3 text-sm leading-7 text-slate-500">
          Form layouts, tables, dialogs — everything you need to build beautiful
          responsive web applications.
        </p>
        <div className="mt-10 divide-y divide-slate-100 border-t border-slate-100 lg:mt-12">
          <section className="grid scroll-mt-12 grid-cols-1 gap-x-8 gap-y-10 py-10 lg:py-12 xl:grid-cols-4">
            <h3 className="text-base font-semibold text-slate-900">
              Application Shells
            </h3>
            <ul className="col-span-3 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-2 sm:gap-y-10 md:grid-cols-3 xl:gap-x-8">
              <li>
                <div className="group relative before:absolute before:-inset-2.5 before:rounded-[20px] before:bg-gray-50 before:opacity-0 hover:before:opacity-100">
                  <div className="relative aspect-[2/1] overflow-hidden rounded-lg bg-gray-100 ring-1 ring-gray-900/10">
                    <img
                      src="https://tailwindui.com/img/category-thumbnails/application-ui/stacked.png"
                      alt=""
                      className="absolute inset-0 h-full w-full"
                    />
                  </div>
                  <h4 className="mt-4 text-sm font-medium text-slate-900 group-hover:text-indigo-600">
                    <a href="/shell/stacked">
                      <span className="absolute -inset-2.5 z-10"></span>
                      <span className="relative">Stacked Layouts</span>
                    </a>
                  </h4>
                  <p className="relative mt-1.5 text-xs font-medium text-slate-500">
                    9 components
                  </p>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </section>
    </main>
  );
}
