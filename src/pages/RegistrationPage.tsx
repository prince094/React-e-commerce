import { FormEvent, useRef, useState } from 'react';
import BreadCrumb from '../ui/BreadCrumb';
import Input from "../ui/Input.tsx";

type RegisterProps = {
  onRegister: (login: string, fio: string, email: string) => void;
}

function RegistrationPage({onRegister}: RegisterProps) {
  const [input, setInput] = useState('');

  const login = useRef<HTMLInputElement>(null)
  const fio = useRef<HTMLInputElement>(null)
  const email = useRef<HTMLInputElement>(null)

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredLogin = login.current!.value;
    const enteredFIO = login.current!.value;
    const enteredEmail = login.current!.value;

    event.currentTarget.reset();
    onRegister(enteredLogin, enteredFIO, enteredEmail)
  }
  return (
    <div className="py-5">
      <BreadCrumb />
      <h2 className="mt-4 hidden text-[22px] font-semibold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:text-3xl ">
        Registration
      </h2>
      <h2 className="mt-4 text-[22px] font-semibold leading-tight tracking-tight text-gray-800 sm:mb-0 sm:text-2xl md:text-3xl ">
        Password recovery
      </h2>
 
      {/* form */}
      <form onSubmit={handleSubmit} className="mt-6  rounded bg-[#F5F8FC] p-4 sm:p-10">
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input ref={login} id={'login'} label="Login" type="text" onChange={setInput} />
          </div>
          <p></p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input ref={fio} id={'fio'} label="FIO" type="text" onChange={setInput} />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            Fill out so we know how to contact you.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input ref={email} label={'E-mail'} type={'text'} onChange={setInput} />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            To send order status notifications. Use as login for login to your
            personal account.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            Required to clarify the details of the order.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <p className="hidden text-extragray  sm:block">
            The password must be at least 6 characters long.
          </p>
        </div>
        <div className=" flex items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input label={'Login'} type={'text'} onChange={setInput} />
          </div>
          <p className="hidden sm:block "></p>
        </div>
        <p className="my-2 mb-4 text-sm sm:w-1/3">
          By clicking on the Register button, you consent to{' '}
          <b>the processing of personal data</b>
        </p>
        <button className="h-[50px] w-full rounded bg-green text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)] sm:w-1/3">
          Sign In
        </button>
      </form>

      <form
        action=""
        className="mt-6  flex flex-col items-center justify-center rounded bg-[#F5F8FC] p-4 sm:p-10"
      >
        <h2 className="mb-2 font-bold sm:mb-4 sm:text-xl">
          {' '}
          If you have forgotten your password, please enter your username or
          E-Mail.{' '}
        </h2>
        <p className="mb-5 text-sm text-extragray sm:text-base">
          The control string for changing the password, as well as your
          registration data, will be sent to you by E-Mail.
        </p>
        <div className="mb-2 w-full md:w-1/2">
          <Input label={'E-mail'} type={'text'} onChange={setInput} />
        </div>
        <button className="h-[50px] w-full rounded bg-green text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)] md:w-1/3">
          Reset
        </button>
      </form>
    </div>
  );
}

export default RegistrationPage;
