import React from 'react';

interface ProgressLineProps {
  label: string;
  percentage: number;
}

const ProgressLine: React.FC<ProgressLineProps> = ({ label, percentage }) => {
  return (
    <div className='flex flex-col gap-4'>
      <div className="flex justify-between items-center mb-2">
        <span className="text-2xl font-normal text-gray-200">{label}</span>
        <span className="text-2xl font-normal text-white">{percentage}%</span>
      </div>
      <div className="relative w-full bg-gray-700 rounded-full h-3">
        {/* Green progress bar */}
        <div
          className="h-3 rounded-full bg-[#7ED957]"
          style={{ width: `${percentage}%` }}
        ></div>
        {/* White circular handle at the end */}
        <div
          className="absolute top-1/2 -translate-y-1/2 w-7 h-7 bg-white border-2 border-[#7ED957] rounded-full"
          style={{ left: `calc(${percentage}% - 14px)` }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressLine;