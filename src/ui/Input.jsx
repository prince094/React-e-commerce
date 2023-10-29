function Input({
  label,
  type,
  name,
  optional = false,
  defaultValue = '',
  onChange,
}) {
  return (
    <div className="mb-3">
      <label
        className="mb-1 block text-sm text-extragray sm:text-base"
        htmlFor="login"
      >
        {label}
        {!optional && <sup className=" text-red">*</sup>}
      </label>
      <input
        type={type}
        className="h-[45px] w-full rounded border border-[#E2E9F2] bg-[#F8FAFD] px-2 pl-3 text-[16px] outline-none sm:h-[50px]"
        name={name}
        defaultValue={defaultValue}
        required
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}

export default Input;
