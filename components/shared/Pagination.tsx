interface PaginationProps {
  totalSlides: number;
  currentIndex: number;
  onSlideChange: (index: number) => void;
}

export default function Pagination({ totalSlides, currentIndex, onSlideChange }: PaginationProps) {
  return (
    <div className="w-full flex gap-3 h-[22px] items-end justify-center">
      {Array.from({ length: totalSlides }).map((_, index) => (
        <button
          key={index}
          onClick={() => onSlideChange(index)}
          className={`transition-all cursor-pointer ${
            currentIndex === index 
              ? 'bg-[#bebebe] h-3 w-[50px]' 
              : 'bg-[#dadada] w-3 h-3 hover:bg-[#bebebe]'
          }`}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
}
