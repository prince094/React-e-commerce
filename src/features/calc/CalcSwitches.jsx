import { classNames } from '../../utils/helpers';

// import seasons from '../../data/data-seasons.json';
const seasons = [
  {
    value: 'winter',
    label: 'Winter',
  },
  {
    value: 'summer',
    label: 'Summer',
  },
  {
    value: 'all-seasons',
    label: 'All seasons',
  },
  {
    value: 'no-studded',
    label: 'No studded',
  },
  {
    value: 'studded',
    label: 'Studded',
  },
];

function CalcSwitches({ slice, isChecked, handleCheck }) {
  return (
    <div className="mb-[10px] flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
      {seasons.slice(...slice).map((item) => (
        <label
          key={item.value}
          htmlFor={item.value}
          className={classNames(
            isChecked ? 'is-active' : '',
            'flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]'
          )}
        >
          <input
            type="checkbox"
            id={item.value}
            checked={isChecked}
            onChange={handleCheck}
          />
          <img className="w-[20px]" src={`/img/${item.value}.svg`} alt="" />
          <span className="ml-[10px] text-sm font-bold">{item.label}</span>
        </label>
      ))}
    </div>
  );
}

export default CalcSwitches;
