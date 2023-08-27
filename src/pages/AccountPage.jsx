import {
  ArrowLeftOnRectangleIcon,
  EnvelopeIcon,
  ShoppingBagIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import BreadCrumb from '../ui/BreadCrumb';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Input from '../ui/Input';

function AccountPage() {
  const [input, setInput] = useState('');
  return (
    <div className="py-5">
      <BreadCrumb />
      <h2 className="mt-4  text-[22px] font-semibold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:text-3xl ">
        Personal cabinet
      </h2>
      <div className="my-5 flex flex-col items-start md:flex-row">
        <div className="mb-5 w-full md:mb-0 md:basis-[35%]">
          <div className=" -mr-[1px] border border-[#E2E9F2]">
            <div className="flex items-center border-b border-[#E2E9F2] p-4 sm:p-6">
              <div className="flex h-16 w-16 items-center justify-center overflow-hidden rounded-full border-[2px] border-[#FBCC96] bg-[#FFDFBA] sm:h-[100px] sm:w-[100px]">
                {'' ? (
                  <img
                    className="h-full w-full object-cover"
                    src="https://media.licdn.com/dms/image/C4D03AQGCsxbsZR3ZuA/profile-displayphoto-shrink_800_800/0/1658490145457?e=2147483647&v=beta&t=KUQVaEUrks_zp-F1Yq7HmjMMFYBzaFlPclv23_ha6Ow"
                    alt=""
                  />
                ) : (
                  <span className="text-3xl font-medium text-white">BJ</span>
                )}
              </div>
              <div className="ml-4 sm:ml-6">
                <span className="text-sm text-extragray sm:text-base">
                  jakhongir_v
                </span>
                <p className="font-bold sm:text-lg">Jahongir Bektemirov</p>
              </div>
            </div>
            <div className="">
              <Link className="cabinet-link group">
                <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
                  <UserIcon className="h-6 text-gray-500  group-hover:text-black sm:h-8" />
                </div>
                <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
                  Personal data
                </p>
              </Link>
              <Link className="cabinet-link group">
                <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
                  <ShoppingBagIcon className="h-6 text-gray-500  group-hover:text-black sm:h-8" />
                </div>
                <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
                  My purchases
                </p>
              </Link>
              <Link className="cabinet-link group">
                <div className="relative z-10 flex h-full w-[50px] items-center justify-center bg-[#F5F8FC] sm:w-[70px]">
                  <EnvelopeIcon className="h-6 text-gray-500 group-hover:text-black sm:h-8" />
                </div>
                <p className="relative z-10 ml-5 font-medium text-extragray group-hover:text-black">
                  Subscription settings
                </p>
              </Link>
            </div>
          </div>
          <Link className="ml-5 mt-5 flex items-center">
            <ArrowLeftOnRectangleIcon className="w-6 text-red sm:w-8" />
            <p className="ml-2 text-sm font-medium uppercase text-red sm:text-base">
              Log out
            </p>
          </Link>
        </div>
        {/* <ContentRight setInput={setInput} /> */}
        <ContentRight2 setInput={setInput} />
      </div>
      <button className="mx-auto h-[50px] w-full rounded bg-green  text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)] sm:w-1/3">
        Save
      </button>
    </div>
  );
}

export default AccountPage;

function ContentRight({ setInput }) {
  return (
    <div className="basis-[65%] border border-[#E2E9F2] ">
      <div className="flex h-[55px] items-center border-b border-[#E2E9F2] px-10 sm:h-[79px]">
        <h2 className="text-base font-bold uppercase sm:text-xl">My data</h2>
      </div>
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Personal data
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
        </div>
      </div>
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Contacts
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3 sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
        </div>
      </div>
      <div className="border-b border-[#E2E9F2] px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Address
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
        </div>
      </div>
      <div className=" px-6 py-4 sm:px-10 sm:py-7">
        <h2 className="mb-3 font-medium sm:mb-4 sm:text-lg sm:font-bold">
          Changing the user's password
        </h2>
        <div className="-mx-3 flex flex-wrap ">
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <div className="flex-shrink-0 flex-grow-0 basis-full px-3">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
        </div>
      </div>
    </div>
  );
}

function ContentRight2({ setInput }) {
  return (
    <div className="w-full border border-[#E2E9F2] md:basis-[65%] ">
      <div className="flex h-[55px] items-center border-b border-[#E2E9F2] px-10 sm:h-[79px]">
        <h2 className="text-base font-bold uppercase sm:text-xl">
          My purchases
        </h2>
      </div>
      <div className="">
        {[1, 2, 3].map((order) => (
          <div
            key={order}
            className="flex flex-col justify-between space-y-4 border-b p-5 last:border-b-0 sm:flex-row sm:space-y-0"
          >
            <div className="">
              <p className="text-extragray">
                <b className="text-black">№0TRZ-157020</b> from 09.07.2022 19:24
              </p>
              <p className="font-bold text-green">In processing</p>
              {/* <p>On the way</p>
            <p>Delivered</p>
            <p>Canceled</p> */}
            </div>
            <div className="">
              <p className="text-extragray">ID</p>
              <p>
                <b>40408</b>
              </p>
            </div>
            <div className="">
              <p className="text-extragray">Order price</p>
              <p>
                <b>200$</b>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
