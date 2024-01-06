import {
  ChevronDownIcon,
  ChevronRightIcon,
  EyeIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
} from '@heroicons/react/20/solid';
import BreadCrumb from '../ui/BreadCrumb';
import Select from '../ui/Select';
import Screen from '../hooks/useScreenSize';

const seasonTypes = [
  {
    id: 1,
    name: 'All tires',
  },
  {
    id: 143,
    name: 'sunny',
  },
  {
    id: 132,
    name: 'winter',
  },
  {
    id: 1433,
    name: 'not shipovniy',
  },
  {
    id: 41433,
    name: 'shipovniy',
  },
];

const brands = [
  'falken',
  'firelli',
  'odyking',
  'dayton',
  'firemax',
  'firelli',
  'odyking',
];

function SelectionByCarBrand2() {
  return (
    <>
      <BreadCrumb />
      <div className="my-4">
        <h2 className="mb-2 text-[18px] font-bold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl  md:text-3xl ">
          Car tires Cordiant in Uzbekistan
        </h2>
      </div>
      {/* top contents */}
      <div className="my-4 flex flex-col gap-x-5 md:flex-row">
        <div className="basis-1/4">
          <div className="mb-4 flex justify-center rounded bg-white px-6 py-3 shadow-[0_20px_50px_0_rgba(2,36,86,0.08)] md:mb-0 md:p-4">
            <img
              className="w-[75%] md:w-full"
              src="/img/catalog/brand/contyre.svg"
              alt="has image"
            />
          </div>
        </div>
        <div className="flex basis-3/4 items-center justify-between">
          <h2 className="hidden text-xl font-semibold uppercase md:block">
            Model tire:
          </h2>
          <div className="w-full md:w-auto">
            <Select
              width={Screen(768) ? '100%' : '290px'}
              dataSource={seasonTypes}
            />
          </div>
        </div>
      </div>
      {/* products */}
      <div className="my-4 flex gap-x-5">
        <div className="hidden basis-1/4 rounded bg-white p-4 shadow-[0_0_50px_0_rgba(2,36,86,0.05)] md:block">
          <ul className="font-normal text-[#566879]  [&>.active]:rounded [&>.active]:bg-[#F7F9FD] [&>.disabled>span]:text-[#BECAD6] [&>.disabled]:text-[#BECAD6] [&>li]:rounded [&>li]:transition-all [&>li]:duration-200 hover:[&>li]:bg-[#F7F9FD]">
            <li className="disabled mb-2 px-4 py-2">
              Achilles{' '}
              <span className="ml-1 text-[12px] text-[#E31E24]">(0)</span>
            </li>
            <li className="active mb-2 px-4 py-2">
              Achilles{' '}
              <span className="ml-1 text-[12px] text-[#E31E24]">(54)</span>
            </li>
            {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
              <li className="mb-2 px-4 py-2">
                Achilles{' '}
                <span className="ml-1 text-[12px] text-[#E31E24]">
                  ({item}4)
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-2 flex items-center justify-center rounded bg-[#F5F8FC] p-[6px]">
            <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-white">
              <PlusSmallIcon class="h-6 w-6 " />
            </div>
            <p className="ml-4 text-sm font-medium uppercase">Show all</p>
          </div>
        </div>
        <div className="flex md:basis-3/4">
          <div className="flex flex-wrap hover:[&>div]:shadow-[0px_20px_30px_0px_rgba(2,36,86,0.10)] hover:[&>div]:transition-all">
            <div className="flex max-h-[300px]  basis-[100%] flex-col items-center border  border-[#E2E9F2] p-5 font-semibold sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
              <p className="mb-4 max-h-[170px] flex-auto">
                <img className="h-full object-cover" src="/img/03.png" alt="" />
              </p>
              <p className="max-w-[150px] truncate pb-4">
                Polar 2 Lorem ipsum dolor sit amet.
              </p>
              <div className="whitespace-nowrap rounded px-3 text-xl text-[#566879]">
                from 46 $
              </div>
            </div>
            {[1, 2, 3, 4].map((tire) => (
              <div className="flex max-h-[300px]  basis-[100%] flex-col items-center border  border-[#E2E9F2] p-5 font-semibold sm:basis-1/2 lg:basis-1/3 xl:basis-1/4">
                <p className="mb-4 max-h-[170px] flex-auto">
                  <img
                    className="h-full object-cover"
                    src="/img/02.png"
                    alt=""
                  />
                </p>
                <p className=" max-w-[150px] truncate pb-4">Polar 2</p>
                <div className="rounded bg-[#BCBCBC] px-3 text-sm text-white">
                  Not available
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* text description */}
      <p className="mt-12 text-xl font-light">
        Cordiant passenger car tires are a combination of high quality and
        confidence that your car will drive steadily on the road even in extreme
        weather conditions. You can buy tires of this brand in our company at an
        attractive price. Each model has an original tread shape, thanks to
        which you can feel comfortable on the road even during extreme driving
        (icy ice, wet snow). Winter and summer tires Cordiant, the cost of which
        depends on the type and model of tires, will be an ideal choice for
        those who love comfort on the road, quiet and smooth driving even at
        high speeds, and are also accustomed to the optimal ratio of rubber
        quality and cost. Even the top-end models have an affordable price,
        thanks to which there are more users of rubber of this brand every day.
        Benefits of Cordiant rubber If you decide to buy Russian cordiant tires,
        you will get beneficial advantages: 1. The original design using DSSK
        rubber allows you to reduce the mass of rubber, while maintaining high
        strength and quality of tires, depending on the model and cost. 2. All
        tires that you will find in the catalog of our company are designed to
        ride in accordance with our climate and roads. 3. The shape of the tread
        is made taking into account the need to constantly combat the sticking
        of dirt and snow. The manufacturer specially complicated it in order to
        provide auto stability even under the most difficult conditions - with
        sharp maneuvers, forced braking and drifts. Cordiant tire models If you
        want to buy summer, winter or all-season cordiant tires, then check out
        the brand's common collections: 1.Comfort. Models are designed for
        low-quality road surfaces. They provide a high level of braking even on
        wet and slippery roads. Such rubber has a special tread pattern that
        provides the motorist with comfort and confidence on the road. 2.Sport.
        The line is intended for fans of fast driving and steep turns. The tread
        pattern keeps the car stable in any situation. 3 Polar. Cordiant winter
        tires are used for driving on snowy, slippery road surfaces. The tread
        pattern allows you to get stability and quick cleaning of the rubber
        surface when driving on snow and mud. 4. Max. The manufacturer offers a
        new direction for movement in harsh winter conditions. The tread pattern
        makes it easy and safe to navigate snowy terrain. Friction tires
        (velcro) cordiant, studded cordiant tires are also available in the
        catalog. To order cordiant tires in Kazakhstan at an attractive price,
        leave a request on the website of our store.
      </p>
    </>
  );
}

export default SelectionByCarBrand2;
