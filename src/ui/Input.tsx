import { ComponentPropsWithoutRef, FormEvent } from "react";

type InputProps= {
  label: string;
  id: string;
  optional: boolean;
  onChange: (e: any) => FormEvent;
} & ComponentPropsWithoutRef<'input'>


function Input({
  label,
  id,
  optional = false, 
  onChange,
  ...props
}: InputProps) {
  return (
    <p className="mb-3">
      <label
        className="mb-1 block text-sm text-extragray sm:text-base"
        htmlFor={id}
      >
        {label}
        {!optional && <sup className=" text-red">*</sup>}
      </label>
      <input
        id={id}
        className="h-[45px] w-full rounded border border-[#E2E9F2] bg-[#F8FAFD] px-2 pl-3 text-[16px] outline-none sm:h-[50px]"
        onChange={(e) => onChange(e.target.value)}
        {...props}
      />
    </p>
  );
}

export default Input;
