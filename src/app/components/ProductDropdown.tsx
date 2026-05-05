import { ChevronDown } from 'lucide-react';

interface ProductDropdownProps {
  id: string;
  title: string;
  options: string[];
  isOpen: boolean;
  onToggle: (id: string) => void;
}

export function ProductDropdown({ id, title, options, isOpen, onToggle }: ProductDropdownProps) {
  return (
    <div className="relative">
      <button
        onClick={() => onToggle(id)}
        className="w-full bg-white border-2 border-green-300 hover:border-yellow-500 rounded-lg px-4 py-3 flex justify-between items-center transition-all touch-manipulation"
        aria-expanded={isOpen}
        aria-label={`${isOpen ? 'Close' : 'Open'} ${title} options`}
      >
        <span className="font-semibold text-green-800 text-left">{title}</span>
        <ChevronDown
          className={`text-green-700 transition-transform duration-300 flex-shrink-0 ml-2 ${isOpen ? 'rotate-180' : ''}`}
          size={20}
        />
      </button>
      {isOpen && (
        <div className="absolute z-20 w-full mt-2 bg-white border-2 border-green-300 rounded-lg shadow-xl max-h-64 overflow-y-auto">
          {options.map((option, index) => (
            <div
              key={index}
              className="px-4 py-3 hover:bg-green-50 cursor-pointer transition-colors border-b border-green-100 last:border-b-0 text-sm md:text-base"
            >
              <span className="text-zinc-700">{option}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
