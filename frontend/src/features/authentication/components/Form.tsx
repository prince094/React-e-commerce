import {
  ComponentPropsWithoutRef,
  FormEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
} from 'react';

export type FormProps = ComponentPropsWithoutRef<'form'> & {
  onSave: (value: unknown) => void;
};
// export in order to get an another component
export type FormHandle = {
  clear: () => void;
  signUpMethod: () => void;
  passwordRecoveryMethod: () => void;
};

export const Form = forwardRef<FormHandle, FormProps>(function Form(
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
      signUpMethod: () => {
        console.log('Custom method called');
      },
      passwordRecoveryMethod: () => {
        console.log('PasswordRecoveryMethod');
      },
    };
  });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData);
    onSave(data);
    console.log('formData:', data);
    form.current?.reset();
  }

  return (
    <form onSubmit={handleSubmit} {...otherProps} ref={form}>
      {children}
    </form>
  );
});
