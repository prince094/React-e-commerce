import CalcAction from './CalcAction';
import CalcMark from './CalcMark';
import CalcSettings from './CalcSettings';
import CalcSwitches from './CalcSwitches';

function CalcContent02() {
  return (
    <div className="category-selection-content mb-10 flex p-4 pt-3">
      <div className="content-left rounded bg-lightgray px-4 pt-4">
        <h2 className="mb-3 text-xl font-bold">Settings</h2>
        <CalcSettings />
        <div className="image mx-auto mt-[10px] max-w-[488px]">
          <img className="w-full" src="/img/header/frame.svg" alt="" />
        </div>
      </div>
      <div className="content-right w-full overflow-hidden rounded bg-white px-4 pt-3">
        <h2 className="mb-3 text-xl font-bold">Seasonality</h2>
        <CalcSwitches slice={-2} />
        <CalcSwitches slice={3} />
        <CalcMark />
        <CalcAction />
      </div>
    </div>
  );
}

export default CalcContent02;
