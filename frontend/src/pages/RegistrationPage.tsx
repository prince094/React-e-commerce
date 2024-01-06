import {
  ChangeEvent,
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from 'react';
import BreadCrumb from '../ui/BreadCrumb.js';
import Input from '../ui/Input.tsx';
import Button from '../ui/Button.tsx';

// ! first approach
type RegisterProps = {
  onRegister: (login: string, fio: string, email: string) => void;
};

// { onRegister }: RegisterProps
export default function RegistrationPage() {
  const [input, setInput] = useState('');

  const login = useRef<HTMLInputElement>(null);
  const fio = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);

  function handleChange(e: ChangeEvent<HTMLInputElement>) {
    setInput(e.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const enteredLogin = login.current!.value;
    const enteredFIO = login.current!.value;
    const enteredEmail = login.current!.value;

    event.currentTarget.reset();
    // onRegister(enteredLogin, enteredFIO, enteredEmail);
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
      <form
        onSubmit={handleSubmit}
        className="mt-6  rounded bg-[#F5F8FC] p-4 sm:p-10"
      >
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input
              ref={login}
              id="login"
              label="Login"
              type="text"
              onChange={handleChange}
            />
          </div>
          <p></p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input
              ref={fio}
              id={'fio'}
              label="FIO"
              type="text"
              onChange={handleChange}
            />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            Fill out so we know how to contact you.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input
              ref={email}
              id="email"
              label={'E-mail'}
              type={'text'}
              onChange={handleChange}
            />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            To send order status notifications. Use as login for login to your
            personal account.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input
              id="login"
              label={'Login'}
              type={'text'}
              onChange={handleChange}
            />
          </div>
          <p className="mt-3 hidden text-extragray sm:block">
            Required to clarify the details of the order.
          </p>
        </div>
        <div className=" flex  items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input id="log" label="Login" type="text" onChange={handleChange} />
          </div>
          <p className="hidden text-extragray  sm:block">
            The password must be at least 6 characters long.
          </p>
        </div>
        <div className=" flex items-center">
          <div className=" mr-10 flex-shrink-0 flex-grow-0 basis-full sm:basis-1/2">
            <Input
              id="log2"
              label={'Login'}
              type={'text'}
              onChange={handleChange}
            />
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
          <Input id="em" label="E-mail" type="text" onChange={handleChange} />
        </div>
        <button className="h-[50px] w-full rounded bg-green text-white transition hover:shadow-[0px_4px_10px_0px_rgba(21,165,36,0.50)] md:w-1/3">
          Reset
        </button>
      </form>

      <UsageForm />
    </div>
  );
}

// ! second approach
// ? a child component

type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};
// export in order to get an another component
type FormHandle = {
  clear: () => void;
  customMethod: () => void;
};

const Form = forwardRef<FormHandle, FormProps>(function Form(
  { onSave, children, ...otherProps },
  ref
) {
  const form = useRef<HTMLFormElement>(null);

  useImperativeHandle(ref, () => {
    return {
      clear() {
        console.log('CLEARING');
        form.current?.reset();
      },
      // an example for more detail explanition
      customMethod: () => {
        console.log('Custom method called');
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});

// ? a parent component
export function UsageForm() {
  const customForm = useRef<FormHandle>(null);

  function handleSave(data: unknown) {
    const extractedData = data as { name: string; email: string };
    console.log(extractedData);
    customForm.current?.clear();
    customForm.current?.customMethod();
  }

  return (
    <main>
      <Form onSave={handleSave} ref={customForm}>
        <Input type="text" label="Name" id="name" />
        <Input type="text" label="Email" id="email" />
        <p>
          <Button className="" type="success">
            Save
          </Button>
        </p>
      </Form>
    </main>
  );
}
