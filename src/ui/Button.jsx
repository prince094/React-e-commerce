import { Link } from 'react-router-dom';

function Button({ children, disabled, to, type, className, onClick }) {
  const base =
    'flex h-[48px]  items-center justify-center rounded tracking-wide transition-colors duration-300 px-5 font-bold text-white disabled:cursor-not-allowed ' +
    className;

  const styles = {
    success: base + ' bg-green',
    danger: base + ' bg-red',
    black: base + ' bg-black',
    small: base + ' px-4 py-2 md:px-5 md:py-2.5 text-xs',
    light:
      'inline-block text-sm rounded-full border-2 border-stone-300 font-semibold uppercase tracking-wide text-stone-400 transition-colors duration-300 hover:bg-stone-300 hover:text-stone-800 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-200 focus:ring-offset-2 disabled:cursor-not-allowed px-4 py-2.5 md:px-6 md:py-3.5',
  };

  if (to)
    return (
      <Link to={to} className={styles[type]}>
        {children}
      </Link>
    );

  if (onClick)
    return (
      <button onClick={onClick} disabled={disabled} className={styles[type]}>
        {children}
      </button>
    );

  return (
    <button disabled={disabled} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
