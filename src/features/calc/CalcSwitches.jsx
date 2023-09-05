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

function CalcSwitches({ slice }) {
  return (
    <div className="mb-[10px] flex h-[46px] w-full gap-[5px] rounded border border-[#F6F6F6] bg-lightgray p-[5px]">
      {seasons.slice(...slice).map((item) => (
        <div
          key={item.value}
          className="is-active flex w-full items-center justify-center rounded-[3px] [&.is-active]:bg-white [&.is-active]:shadow-[0px_-1px_0px_0px_#D7E0E9_inset]"
        >
          <img className="w-[20px]" src={`/img/${item.value}.svg`} alt="" />
          <span className="ml-[10px] text-sm font-bold">{item.label}</span>
        </div>
      ))}
    </div>
  );
}

export default CalcSwitches;
