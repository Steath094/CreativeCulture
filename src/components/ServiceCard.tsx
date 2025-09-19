import ArrowIcon from '../../public/arrow.svg';
import React from 'react';
import Image from 'next/image';
interface ServiceCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  isHighlighted?: boolean;
  hasTopImage?: boolean;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  imageSrc,
  isHighlighted = false,
  hasTopImage = false,
}) => {
  const cardClasses = `p-6 rounded-xl border-2 transition-all duration-300 flex flex-col h-full
    ${isHighlighted ? 'bg-[#7ED957] border-[#7ED957] text-[#10012B]' : 'bg-[#10012B] border-[#4A2F6B] hover:border-[#7ED957]'}`;
  const textColor = isHighlighted ? 'text-[#10012B]' : 'text-gray-300';
  const borderColor = isHighlighted ? 'border-[#10012B]' : 'border-[#4A2F6B]';
  const linkColor = isHighlighted ? 'text-[#10012B]' : 'text-[#7ED957]';
  const arrowColor = isHighlighted ? '#10012B' : '#7ED957';

  const Divider = () => <hr className={`my-4 ${borderColor}`} />;

  return (
    <div className={cardClasses}>
      <div className="flex-grow">
        {hasTopImage && imageSrc && (
          <>
            <div className="relative rounded-lg overflow-hidden h-40">
              <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
            </div>
            <Divider />
            <h3 className={`text-3xl font-semibold ${isHighlighted ? 'text-[#10012B]' : 'text-white'}`}>{title}</h3>
            <p className={`mt-3 text-base leading-relaxed ${textColor}`}>{description}</p>
          </>
        )}
        {!hasTopImage && (
          <>
            <h3 className={`text-3xl font-semibold ${isHighlighted ? 'text-[#10012B]' : 'text-white'}`}>{title}</h3>
            <Divider />
            <p className={`mt-3 text-base leading-relaxed ${textColor}`}>{description}</p>
            {imageSrc && (
              <div className="relative mt-4 rounded-lg overflow-hidden h-40">
                <Image src={imageSrc} alt={title} layout="fill" objectFit="cover" />
              </div>
            )}
          </>
        )}
      </div>

      <div>
        <Divider />
        <a href="#" className={`flex items-center gap-2 font-medium ${linkColor} hover:underline`}>
          Learn more
          <svg width="30" height="13" viewBox="0 0 30 13" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
            <path d="M22.9022 1.5112L28.4452 6.60005L22.9022 1.5112ZM28.4452 6.60005L22.9022 11.6889L28.4452 6.60005ZM28.4452 6.60005H1.83881H28.4452Z" fill="currentColor"/>
            <path d="M22.9022 1.5112L28.4452 6.60005M28.4452 6.60005L22.9022 11.6889M28.4452 6.60005H1.83881" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
        </a>
      </div>
    </div>
  );
};
export default ServiceCard;