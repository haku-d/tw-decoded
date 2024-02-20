/* eslint-disable @next/next/no-img-element */
'use client';
import React from 'react';

import Header from './header';

export default function Constrained2Col() {
  return (
    <div className="flex flex-col min-h-full	">
      {/* Nav */}
      <Header />
      <div className="xl:px-2 lg:flex grow max-w-7xl w-full mx-auto">
        <div className="xl:flex flex-1">
          {/* Col1 */}
          <div className="xl:pl-6 xl:border-r xl:border-b-0 xl:shrink-0 xl:w-64 lg:pl-8 sm:px-6 py-6 px-4 border-b border-gray-200 ">
            <div className="relative h-[192px] xl:h-[608px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
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
          {/* Col 2 */}
          <div className="xl:flex-1 xl:pl-6 py-6 px-4 sm:px-6 lg:pl-8">
            <div className="relative h-[367px] xl:h-[608px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
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
        {/* Col 3 */}
        <div className="shrink-0 lg:w-96 xl:pr-6 lg:pr-8 lg:border-t-0 lg:border-l sm:px-6 py-6 px-4 border-t border-gray-200">
          <div className="relative h-[256px] lg:h-full xl:h-[608px] overflow-hidden rounded-xl border border-dashed border-gray-400 opacity-75">
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
    </div>
  );
}
