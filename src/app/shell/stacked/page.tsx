import Stacked2RowNav from '@/components/layouts/stacked/stacked-2-row-nav';
import StackedBrandedNav from '@/components/layouts/stacked/stacked-branded-nav';
import StackedBrandedOverlap from '@/components/layouts/stacked/stacked-branded-overlap';
import StackedDarkNav from '@/components/layouts/stacked/stacked-dark-nav';
import StackedDarkOverlap from '@/components/layouts/stacked/stacked-dark-overlap';
import StackedLightNav from '@/components/layouts/stacked/stacked-light-nav';
import StackedLightNav2 from '@/components/layouts/stacked/stacked-light-nav-2';

export default function Page() {
  return (
    <div className="relative mx-auto my-20 w-full max-w-6xl px-4 sm:px-6 lg:px-8">
      <div className="flex flex-col">
        <h1 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Stacked Layouts
        </h1>
      </div>
      <div className="mt-10 space-y-24 pb-px">
        <StackedDarkNav />
        <StackedLightNav />
        <StackedLightNav2 />
        <StackedBrandedNav />
        <StackedDarkOverlap />
        <StackedBrandedOverlap />
        <Stacked2RowNav />
      </div>
    </div>
  );
}
