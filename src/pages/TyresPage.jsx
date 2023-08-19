import {
  MapPinIcon,
  ChevronRightIcon,
  HeartIcon,
  ChevronDownIcon,
} from '@heroicons/react/24/outline';
import React from 'react';
import honour from '../../public/img/tyres/honour-line.png';
import car from '../../public/img/tyres/car_1.png';
import tyresData from '../data/tyresData.json';
import tyresPageNavigationData from '../data/tyresPageNavigationData.json';
const TyresPage = () => {
  const gradientColors = [
    { from: '#FF5C00', to: '#FCDB2D' },
    { from: '#0E3D39', to: '#28CA55' },
    { from: '#3481B8', to: '#4D99D0' },
    { from: '#EE3636', to: '#F18A3F' },
    { from: '#6D0293', to: '#7F43FF' },
  ];
  const tyreTypes = [
    'Summer tires',
    'All season tires',
    'Winter tires',
    'Studded',
    'Not studded',
  ];
  const tyreTypesIcons = [
    <svg
      width="42"
      height="42"
      viewBox="0 0 42 42"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38.2337 21.9027C37.7601 21.8782 37.3981 21.4743 37.3981 21C37.3981 20.5257 37.7601 20.1218 38.2337 20.0973L40.0485 20.0037C40.6281 19.9739 41.125 20.4196 41.125 21C41.125 21.5804 40.6281 22.0261 40.0485 21.9962L38.2337 21.9027ZM35.203 12.7986C35.4405 13.209 35.9563 13.379 36.3787 13.1633L37.9945 12.3384C38.5129 12.0737 38.7203 11.4358 38.4287 10.9319C38.1371 10.4281 37.4825 10.2927 36.9946 10.6102L35.474 11.5997C35.0765 11.8583 34.9655 12.3881 35.203 12.7986ZM29.2014 6.79698C29.6119 7.0345 30.1417 6.92345 30.4003 6.52597L31.3898 5.00539C31.7073 4.51748 31.5719 3.86287 31.0681 3.5713C30.5642 3.27974 29.9263 3.48707 29.6616 4.00552L28.8367 5.6213C28.621 6.04366 28.791 6.55946 29.2014 6.79698ZM21 4.60185C21.4743 4.60185 21.8782 4.23995 21.9027 3.76627L21.9962 1.95147C22.0261 1.37188 21.5804 0.875 21 0.875C20.4196 0.875 19.9739 1.37188 20.0037 1.95147L20.0973 3.76627C20.1218 4.23994 20.5257 4.60185 21 4.60185ZM12.7986 6.79698C13.209 6.55946 13.379 6.04366 13.1633 5.6213L12.3384 4.00552C12.0737 3.48707 11.4358 3.27974 10.9319 3.5713C10.4281 3.86287 10.2927 4.51748 10.6102 5.00539L11.5997 6.52597C11.8583 6.92345 12.3881 7.03451 12.7986 6.79698ZM6.79698 12.7986C7.0345 12.3881 6.92345 11.8583 6.52597 11.5997L5.00539 10.6102C4.51748 10.2927 3.86287 10.4281 3.5713 10.9319C3.27974 11.4358 3.48707 12.0737 4.00552 12.3384L5.6213 13.1633C6.04366 13.379 6.55946 13.209 6.79698 12.7986ZM3.76627 20.0973C4.23995 20.1218 4.60185 20.5257 4.60185 21C4.60185 21.4743 4.23994 21.8782 3.76627 21.9027L1.95147 21.9963C1.37188 22.0261 0.875 21.5804 0.875 21C0.875 20.4196 1.37188 19.9739 1.95147 20.0037L3.76627 20.0973ZM6.79698 29.2014C6.55946 28.791 6.04366 28.621 5.6213 28.8367L4.00552 29.6616C3.48707 29.9263 3.27974 30.5642 3.5713 31.0681C3.86287 31.5719 4.51748 31.7073 5.00539 31.3898L6.52598 30.4003C6.92345 30.1417 7.03451 29.6119 6.79698 29.2014ZM12.7986 35.203C12.3881 34.9655 11.8583 35.0765 11.5997 35.474L10.6102 36.9946C10.2927 37.4825 10.4281 38.1371 10.9319 38.4287C11.4358 38.7203 12.0737 38.5129 12.3384 37.9945L13.1633 36.3787C13.379 35.9563 13.209 35.4405 12.7986 35.203ZM21 37.3981C20.5257 37.3981 20.1218 37.7601 20.0973 38.2337L20.0037 40.0485C19.9739 40.6281 20.4196 41.125 21 41.125C21.5804 41.125 22.0261 40.6281 21.9963 40.0485L21.9027 38.2337C21.8782 37.7601 21.4743 37.3981 21 37.3981ZM29.2014 35.203C28.791 35.4405 28.621 35.9563 28.8367 36.3787L29.6616 37.9945C29.9263 38.5129 30.5642 38.7203 31.0681 38.4287C31.5719 38.1371 31.7073 37.4825 31.3898 36.9946L30.4003 35.474C30.1417 35.0765 29.6119 34.9655 29.2014 35.203ZM35.203 29.2014C34.9655 29.6119 35.0765 30.1417 35.474 30.4003L36.9946 31.3898C37.4825 31.7073 38.1371 31.5719 38.4287 31.0681C38.7203 30.5642 38.5129 29.9263 37.9945 29.6616L36.3787 28.8367C35.9563 28.621 35.4405 28.791 35.203 29.2014Z"
        fill="white"
      />
      <path
        d="M34.7894 21C34.7894 28.6157 28.6157 34.7894 21 34.7894C13.3844 34.7894 7.21069 28.6157 7.21069 21C7.21069 13.3844 13.3844 7.21069 21 7.21069C28.6157 7.21069 34.7894 13.3844 34.7894 21Z"
        fill="white"
      />
    </svg>,
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M2.30005 35.0402C2.66303 35.4377 3.27739 35.5138 3.75043 35.206L5.43638 34.1089C5.80825 33.8669 5.954 33.4109 5.83224 33.0009L2.30005 35.0402ZM8.36376 31.5393C11.0357 35.994 15.9119 38.9753 21.4845 38.9753C29.9284 38.9753 36.7735 32.1302 36.7735 23.6863C36.7735 20.9869 36.0739 18.4509 34.8462 16.2497L8.36376 31.5393ZM37.3782 14.7878C37.6734 15.0969 38.1412 15.1987 38.5356 14.9974L40.3271 14.0827C40.8264 13.8278 41.0655 13.2607 40.9079 12.75L37.3782 14.7878ZM39.666 23.6863C39.666 24.2122 40.0672 24.66 40.5924 24.6871L42.6046 24.7909C43.2472 24.824 43.7981 24.3298 43.7981 23.6863C43.7981 23.0428 43.2472 22.5486 42.6046 22.5817L40.5924 22.6855C40.0672 22.7126 39.666 23.1604 39.666 23.6863ZM11.0619 39.7344C11.3486 39.2937 11.9361 39.1706 12.3912 39.4339C12.8462 39.6973 13.0346 40.2692 12.7956 40.7375L11.8809 42.529C11.5874 43.1038 10.8801 43.3337 10.3215 43.0104C9.76287 42.6871 9.61274 41.9613 9.96476 41.4204L11.0619 39.7344ZM20.4837 42.7942C20.5107 42.269 20.9586 41.8678 21.4845 41.8678C22.0104 41.8678 22.4582 42.269 22.4853 42.7942L22.5891 44.8064C22.6222 45.449 22.128 45.9999 21.4845 45.9999C20.841 45.9999 20.3468 45.449 20.3799 44.8064L20.4837 42.7942ZM30.1734 40.7375C29.9343 40.2692 30.1227 39.6973 30.5778 39.4339C31.0329 39.1706 31.6203 39.2937 31.9071 39.7344L33.0042 41.4204C33.3562 41.9613 33.2061 42.6871 32.6475 43.0104C32.0889 43.3337 31.3815 43.1038 31.0881 42.529L30.1734 40.7375ZM37.5326 34.1089C37.0919 33.8222 36.9688 33.2347 37.2321 32.7796C37.4955 32.3245 38.0674 32.1361 38.5357 32.3752L40.3271 33.2899C40.902 33.5833 41.1319 34.2907 40.8086 34.8493C40.4853 35.4079 39.7595 35.558 39.2185 35.206L37.5326 34.1089Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.426 0C20.541 0 19.8235 0.728887 19.8235 1.62801V6.9916L17.3884 4.79259C16.7315 4.19944 15.719 4.25335 15.1268 4.913C14.5345 5.57265 14.5869 6.58824 15.2438 7.1814L19.8235 11.3171V18.9848L13.5734 15.3658L12.2031 8.90026C12.019 8.03143 11.1679 7.47671 10.3022 7.66126C9.4365 7.84582 8.88397 8.69975 9.0681 9.56858L9.83838 13.203L4.76699 10.2665C4.00542 9.82552 3.02931 10.0912 2.58678 10.8599C2.14426 11.6287 2.40289 12.6093 3.16446 13.0503L7.85506 15.7663L4.68875 16.7981C3.84645 17.0726 3.38534 17.9795 3.65884 18.8237C3.93234 19.6679 4.83687 20.1298 5.67918 19.8553L11.5901 17.9291L18.3406 21.8379L11.9327 25.5483L5.61144 23.4884C4.76913 23.2139 3.8646 23.6758 3.5911 24.52C3.31761 25.3642 3.77872 26.2711 4.62102 26.5455L8.19768 27.7111L3.09388 30.6664C2.42 31.0566 2.1399 31.8694 2.39094 32.5839L40.1279 10.7965C39.6423 10.1863 38.7755 10.0053 38.0851 10.4051L33.3943 13.1212L34.0865 9.85487C34.2707 8.98604 33.7181 8.1321 32.8524 7.94755C31.9867 7.763 31.1356 8.31771 30.9515 9.18654L29.6593 15.284L23.0285 19.1234V11.8329L27.9702 7.37034C28.627 6.77719 28.6794 5.76159 28.0872 5.10194C27.495 4.44229 26.4824 4.38838 25.8256 4.98154L23.0285 7.50739V1.62801C23.0285 0.728886 22.3111 0 21.426 0Z"
        fill="white"
      />
    </svg>,
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20.7388 1.71305C20.7388 0.76696 21.4938 0 22.425 0C23.3563 0 24.1113 0.766958 24.1113 1.71305V7.89953L27.0544 5.24174C27.7456 4.61761 28.811 4.67433 29.4342 5.36843C30.0573 6.06254 30.0022 7.13119 29.3111 7.75532L24.1113 12.4509V20.1223L31.0883 16.0823L32.4481 9.6664C32.6418 8.75218 33.5374 8.16849 34.4483 8.36268C35.3592 8.55687 35.9406 9.45542 35.7469 10.3696L35.0185 13.8066L39.9543 10.9486C40.7556 10.4846 41.7827 10.7641 42.2483 11.573C42.714 12.3819 42.4418 13.4138 41.6405 13.8778L36.3041 16.9678L40.0117 18.176C40.898 18.4648 41.3831 19.419 41.0954 20.3073C40.8076 21.1956 39.8558 21.6816 38.9695 21.3928L32.3739 19.2435L25.9234 22.9786L32.8828 27.0084L39.0469 24.9997C39.9332 24.7109 40.885 25.1968 41.1728 26.0851C41.4606 26.9734 40.9754 27.9277 40.0891 28.2165L36.813 29.2841L41.7147 32.1224C42.5161 32.5864 42.7882 33.6183 42.3226 34.4272C41.857 35.2361 40.8299 35.5156 40.0285 35.0516L34.6583 31.942L35.481 35.8238C35.6747 36.738 35.0933 37.6365 34.1824 37.8307C33.2715 38.0249 32.3759 37.4412 32.1822 36.527L30.7282 29.6663L24.1113 25.8349V34.0524L28.9738 38.4434C29.6649 39.0675 29.7201 40.1362 29.0969 40.8303C28.4738 41.5244 27.4083 41.5811 26.7172 40.957L24.1113 38.6038V44.2869C24.1113 45.233 23.3563 46 22.425 46C21.4938 46 20.7388 45.233 20.7388 44.2869V38.1399L17.8392 40.7583C17.1481 41.3825 16.0826 41.3258 15.4595 40.6317C14.8363 39.9375 14.8914 38.8689 15.5826 38.2448L20.7388 33.5885V25.9807L13.6533 30.0835L12.3058 36.4415C12.1121 37.3557 11.2165 37.9394 10.3056 37.7452C9.39467 37.551 8.81328 36.6524 9.00703 35.7382L9.72317 32.3592L4.82159 35.1974C4.02024 35.6614 2.99314 35.3819 2.5275 34.573C2.06186 33.7641 2.334 32.7322 3.13535 32.2682L8.50574 29.1585L4.74225 27.9321C3.85595 27.6433 3.37076 26.6891 3.65854 25.8008C3.94632 24.9125 4.8981 24.4265 5.7844 24.7153L12.4359 26.8828L19.1785 22.9786L12.0753 18.8656L5.85568 20.8924C4.96938 21.1812 4.0176 20.6952 3.72982 19.8069C3.44203 18.9186 3.92723 17.9644 4.81353 17.6756L8.14522 16.5899L3.20961 13.732C2.40826 13.2679 2.13612 12.2361 2.60176 11.4272C3.0674 10.6183 4.0945 10.3387 4.89585 10.8028L10.2321 13.8927L9.42163 10.0684C9.22787 9.15417 9.80926 8.25564 10.7202 8.06144C11.6311 7.86725 12.5267 8.45095 12.7204 9.36516L14.1623 16.1684L20.7388 19.9765V11.9082L15.9199 7.55651C15.2287 6.93237 15.1736 5.86373 15.7967 5.16962C16.4199 4.47552 17.4853 4.4188 18.1765 5.04293L20.7388 7.3568V1.71305Z"
        fill="white"
      />
    </svg>,
    <svg
      width="52"
      height="49"
      viewBox="0 0 52 49"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M30.4598 4.14477C28.4867 0.618401 23.5128 0.618418 21.5397 4.14478L2.18362 38.7389C0.262983 42.1715 2.61758 46.6029 6.64364 46.6029H45.3559C49.3819 46.6029 51.7365 42.1715 49.8159 38.7389L30.4598 4.14477Z"
        stroke="white"
        strokeWidth="3"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M28.603 9.51592C27.4461 7.49469 24.5539 7.49469 23.397 9.51593L7.40717 37.4522C6.25028 39.4735 7.69639 42 10.0102 42H41.9898C44.3036 42 45.7497 39.4735 44.5928 37.4522L28.603 9.51592ZM24.5116 25.5464V36.1456H20.2737V25.5464H17.5547V38.5719H34.1876V25.5464H31.4686V36.1456H27.2307V25.5464H24.5116Z"
        fill="white"
      />
    </svg>,
    <svg
      width="46"
      height="46"
      viewBox="0 0 46 46"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="5.11108"
        y="38.3333"
        width="35.7778"
        height="5.11111"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M22.9999 2.55566L15.3333 15.3334V20.4849L29.0172 12.5844L22.9999 2.55566ZM30.6666 21.5917L15.3333 30.4444V35.7779H30.6666V21.5917Z"
        fill="white"
      />
      <rect
        x="37.687"
        y="10.2222"
        width="4.04668"
        height="37.6154"
        transform="rotate(60 37.687 10.2222)"
        fill="white"
      />
    </svg>,
  ];
  const modelData = [
    '155/65R13',
    '155/70R13',
    '155/65R14',
    '185/65R14',
    '205/65R14',
    '155/65R13',
    '155/70R13',
    '155/65R14',
    '205/65R16',
    '215/65R16',
    '215/60R16',
    '275/60R16',
    '205/65R16',
    '205/65R16',
    '215/65R16',
    '215/60R16',
  ];

  return (
    <div className="p-[20px] sm:p-0">
      <h4 className="my-6 hidden text-xs sm:block">
        Home / Tires / Selection of tires by size
      </h4>
      {/* title part */}
      <div className="sm:flex sm:flex-row sm:justify-between">
        <div>
          <div className="sm:flex sm:items-end">
            <h2 className="text-2xl font-bold text-black sm:text-3xl">
              Tires 155/70R13 in Kazakhstan
            </h2>
            <p className="sm:ml-[23px]">3589 items</p>
          </div>
          <p className="hidden sm:block">Selection by parameters</p>
        </div>
        <div className="flex flex-row items-center">
          <div className="flex h-[70px] w-[70px] flex-row items-center justify-center bg-[#F5F8FC]">
            <MapPinIcon className="h-6 w-6 text-red-600" />
          </div>
          <div className="sm:normal flex w-full flex-row items-center justify-between ">
            <div>
              <h5 className="text-sm">Show products by region:</h5>
              <div className="flex flex-row items-center ">
                <p className="text-md font-bold">Kazakhstan</p>
                <img
                  src="/img/chevronRightIcon.svg"
                  alt="arrow"
                  className="hidden h-4 sm:block"
                />
              </div>
            </div>
            <div>
              <img
                src="/img/chevronRightIcon.svg"
                alt="arrow"
                className="h-8 sm:hidden"
              />
            </div>
          </div>
        </div>
      </div>
      {/* tyretypes by colored boxes */}
      <div className="hidden flex-row justify-between  sm:hidden md:flex">
        {gradientColors.map((colors, index) => (
          <div
            key={index}
            className="mx-1 flex h-24 w-64
            items-center justify-evenly rounded-md  

            "
            style={{
              backgroundImage: `linear-gradient(to bottom right, ${colors.from}, ${colors.to})`,
            }}

            bg-gradient-to-br 
            from-[${colors.from}] to-[${colors.to}]
            `}
          >
            <div>{tyreTypesIcons[index]}</div>
            <div className="text-white">{tyreTypes[index]}</div>
          </div>
        ))}
      </div>
      {/* models card */}
      <div className="my-5 flex hidden w-full items-center justify-between rounded bg-[#E2E9F2] p-2 sm:flex xl:h-[105px]">
        <div className="flex w-[90%] flex-row flex-wrap">
          {modelData.map((model, index) => (
            <div
              key={index}
              className="m-0.5 flex h-[40px] w-[130px] items-center justify-center rounded bg-white"
            >
              {model}
            </div>
          ))}
        </div>
        <div className="flex w-[10%] items-center justify-center pl-2 pr-2 font-bold">
          <p className="text-sm">Show all</p>
          <ChevronRightIcon className="h-[22px] w-[22px]" />
        </div>
      </div>
      {/* middle navbar  */}
      <div className="relative mb-4 flex flex-row justify-between bg-white">
        <div className="hidden flex-row items-center sm:flex">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC] ">
            <img src={honour} alt="Brand Selection" />
          </div>
          <span className="hidden md:hidden lg:block">Brand Selection</span>
          <ChevronRightIcon className="w-[24px]" />
        </div>

        <div className="hidden flex-row items-center sm:flex">
          <div className="flex h-[54px] w-[54px] items-center justify-center bg-[#F5F8FC]">
            <img src={car} alt="Selection by car brand" />
          </div>
          <span className="hidden md:hidden lg:block">
            Selection by car brand
          </span>
          <ChevronRightIcon className="w-[24px]" />
        </div>

        <div className="hidden items-center sm:flex">
          <hr className="hidden h-[40px] w-[1px] bg-gray-300 sm:hidden md:block" />
          <p className="ml-[32px] hidden sm:inline">Sort:</p>
          <select className="ml-4 h-[50px] w-[308px] rounded border pl-4 font-bold">
            <option>Popular first</option>
          </select>
        </div>
      </div>
      {/* tyres list */}
      <div className="w-full flex-row sm:flex ">
        <div className="sm:w-[20%] ">
          <div className="mr-2 hidden h-[236px]  rounded bg-[#F5F8FC] p-4 sm:block">
            <div className="flex flex-row justify-between">
              <span className="font-bold">Options</span>
              <ChevronDownIcon className="w-[28px]" />
            </div>
            <div className="mb-2 mt-8 flex h-[64px] w-full flex-col rounded bg-white">
              <label className="m-1">Width</label>
              <select className="w-full font-bold">
                <option className="text-sm font-bold">All</option>
              </select>
            </div>
            <div className="flex h-[64px] flex-row">
              <div className="mr-2 h-[64px] w-[40%] bg-white">
                <label className="m-1">Profile</label>
                <select className="mt-2 w-full font-bold">
                  <option>All</option>
                </select>
              </div>
              <div className="h-[64px] w-[60%] bg-white">
                <label className="m-1">Diameter(R)</label>
                <select className="mt-2 w-full font-bold">
                  <option>All</option>
                </select>
              </div>
            </div>
          </div>
          <div className="mr-2 mt-4 hidden  h-[620px] rounded rounded bg-[#F5F8FC] py-6 sm:block">
            <div className="mx-4 mb-2 flex flex-row justify-between">
              <span className="font-bold">Seasonality</span>
              <ChevronDownIcon className="w-7" />
            </div>
            <div className="w-88 mx-2 flex h-11 items-center rounded-md bg-white">
              <img
                src="/img/winter-snow.svg"
                className="mx-2 inline w-6"
                alt="winter-icon"
              />
              <span className="mx-2">Winter</span>
              <span>(957)</span>
            </div>
            <div className="m-2 flex items-center">
              <input type="checkbox" className="ml-4 w-5" />
              <img
                src="/img/winter.svg"
                alt="not studded"
                className="mx-2 inline w-4"
              />
              <span>Not studded</span>
            </div>
            <div className="m-2 flex items-center">
              <input type="checkbox" className="ml-4 w-5" />
              <img
                src="/img/studded-icon.svg"
                alt="studded"
                className="mx-2 inline w-4"
              />
              <span>Studded</span>
            </div>
            <div className="w-88 mx-2 my-1 flex h-11 items-center rounded-md bg-white">
              <img
                src="/img/sunny.svg"
                className="mx-2 inline w-6"
                alt="winter-icon"
              />
              <span className="mx-2">Summer</span>
              <span>(645)</span>
            </div>
            <div className="w-88 mx-2 flex h-11 items-center rounded-md bg-white">
              <img
                src="/img/sunny-winter.svg"
                className="mx-2 inline w-6"
                alt="winter-icon"
              />
              <span className="mx-2">All season</span>
              <span>(129)</span>
            </div>
            <hr className="my-6 w-full" />
            <div className="m-4 flex flex-row justify-between">
              <span className="font-bold">Price</span>
              <ChevronDownIcon className="w-7" />
            </div>
            <div className="m-auto flex h-[70px] w-[90%] bg-white">
              <div className="m-2 w-[50%]">
                <label className="font-bold">From</label>
                <input
                  type="text"
                  placeholder="10 000"
                  className="block w-full"
                />
              </div>
              <hr className="my-auto h-12 border" />
              <div className="m-2 w-[50%]">
                <label className="font-bold">To</label>
                <input
                  type="text"
                  placeholder="126 000"
                  className="block w-full"
                />
              </div>
            </div>
            <input
              type="range"
              min="10000"
              max="4000000"
              step="1000"
              value="50000"
              className="slider ml-2 w-[90%] "
            />
            <hr className="my-6 w-full" />
            <button className="mx-auto block h-12 w-[90%] rounded bg-red-600 font-bold text-white">
              Pick up
            </button>
            <button className="mx-auto my-4 block">Reset</button>
          </div>
          <div
            className="mr-2 mt-4  rounded rounded  bg-[#F5F8FC] sm:bg-white
        
          "
          >
            {tyresPageNavigationData.map((item) => (
              <div
                key={item.id}
                className="m-2 flex h-[62px] items-center justify-between rounded rounded bg-white sm:my-2 sm:h-[140px] sm:bg-[#F5F8FC]"
              >
                <img
                  src={item.img}
                  alt="navigation-pictures"
                  className="h-full object-contain object-center sm:w-[40%]"
                />
                <p className="ml-4 w-[40%] font-bold sm:text-xs">
                  {item.title}
                </p>
                <div className="m-1 flex h-[90%] w-6 items-center bg-white">
                  <img
                    src="img/chevronRightIcon.svg"
                    alt="icon"
                    className="hidden h-7 w-7 sm:flex"
                  ></img>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="my-6 flex items-center justify-between sm:hidden">
          <select className=" mr-2 h-[50px] w-full rounded border pl-4 font-bold">
            <option>Popular first</option>
          </select>
          <div className="flex h-[50px] w-[50px] items-center justify-center bg-[#F5F8FC]">
            <img
              src="/img/filter_outline.svg"
              alt="filter"
              className="w-[20px]"
            ></img>
          </div>
        </div>

        <div className="flex w-full flex-row flex-wrap rounded-md bg-white sm:w-[80%]">
          {tyresData.map((item) => (
            <div
              key={item.id}
              className="relative flex flex-col items-center border  sm:h-[450px] sm:w-[323px]"
            >
              <div className="absolute left-2 top-2 mb-1 flex h-[45px] w-[45px] items-center justify-center bg-[#F5F8FC]">
                <img src="/img/sunny-winter.svg" alt="" />
              </div>
              <div className="absolute left-2 top-[56px] flex h-[45px] w-[45px] items-center justify-center bg-[#F5F8FC]">
                {<img src="/img/winter.svg" alt="" />}
              </div>
              <p className="absolute right-3 top-3 text-sm font-bold">
                Reviews:({item.remaining})
              </p>
              <div className="absolute right-3 top-10 flex h-[38px] w-[38px] justify-center rounded-full bg-[#F5F8FC]">
                <HeartIcon className="w-6  " />
              </div>
              <img src={item.img} alt="tyre-card" className="mt-12 w-[50%]" />
              <div className="my-5 flex flex-row items-center">
                <div className="ml-4 flex h-[25px] w-[88px] items-center justify-center rounded bg-[#15A524] px-2 text-xs font-bold text-white">
                  {item.avaiable}
                </div>
                <p className="mx-3 text-xs">{item.description}</p>
              </div>
              <h2 className="mx-6 text-sm font-bold">{item.title}</h2>
              <hr className="my-14 w-11/12" />
              <span className="color-black absolute bottom-4 left-6 text-left text-2xl font-bold">
                {item.parameter}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TyresPage;
