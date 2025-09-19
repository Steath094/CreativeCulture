import React from 'react';

const statsData = [
  { value: "200+", label: "Movies Marketed" },
  { value: "2500+", label: "Meme Page Campaign" },
  { value: "5+", label: "Team Members" },
  { value: "50+", label: "Celebrities & brands served" },
];

function Stats() {
  return (
    <div className="pt-16">
      <div className="mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-[#F5F5F5]">
        {statsData.map((stat, index) => (
          <div key={index} className="text-center px-4"> {/* Added horizontal padding */}
            <p className="text-5xl lg:text-6xl font-medium text-white tracking-tight">
              {stat.value}
            </p>
            <p className="mt-2 text-base md:text-2xl text-gray-300">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Stats;