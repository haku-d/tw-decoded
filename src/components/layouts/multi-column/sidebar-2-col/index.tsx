'use client';
import Sidebar from './sidebar';
import Topbar from './topbar';
import Main from './main';
import Aside from './aside';

export default function Sidebar2Column() {
  return (
    <div className="bg-white ring-1 ring-slate-900/10">
      <div className="">
        <Sidebar />
        <Topbar />
        {/* Left column */}
        <Aside />
        {/* Main column */}
        <Main />
      </div>
    </div>
  );
}
