export const CreateCategory = () => {
  const category = [
    'URL 입력 *',
    '소스 선택/입력 *',
    '미디움 선택/입력 * ',
    '캠페인 이름 입력 *',
    '캠페인 ID 입력',
    '캠페인 텀 입력',
    '캠페인 콘텐츠 입력',
    '메모 입력',
  ];

  return (
    <div className="bg-gray-light mb-[8px] mt-[20px] flex h-[40px] min-w-[1590px] items-center rounded-[4px]">
      <div className="flex h-[40px] w-[62px] content-center items-center "></div>
      <div className="flex w-[1590px] gap-2">
        {category.map((i, idx) => {
          return (
            <div key={idx}>
              <div className=" min-w-[168px] content-between">
                <h3 className="text-[0.7rem]">{i}</h3>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
