import Select from '../../ui/Select';

function CalcMark() {
  return (
    <div className="ml-4 flex h-full max-h-[307px] min-w-[300px] flex-col bg-lightgray px-5 pb-0 pt-4">
      {[...Array(3)].map((item) => (
        <div key={item} className="mb-3">
          <p className="mb-1 text-extragray">Marka</p>
          <Select
            width={'100%'}
            height={'40px'}
            iconSize={'5'}
            dataSource={[
              { id: 1, name: '195' },
              { id: 2, name: '200' },
            ]}
          />
        </div>
      ))}
      <p>
        <img src="" alt="" />
      </p>
    </div>
  );
}

export default CalcMark;
