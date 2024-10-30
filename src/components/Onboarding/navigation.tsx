import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useOnboarding } from './useOnboarding';
import { cn } from '@/lib/utils';

type NavigationButtonProps = {
  direction: 'left' | 'right';
  disabled?: boolean;
};

export const NavigationButton = ({
  direction,
  disabled = false
}: NavigationButtonProps) => {
  const prevStep = useOnboarding(state => state.prevStep);
  const nextStep = useOnboarding(state => state.nextStep);
  const Icon = direction === 'left' ? ChevronLeft : ChevronRight;
  const onClick = direction === 'left' ? prevStep : nextStep;

  return disabled ? null : (
    <button
      type='button'
      className={cn(
        'flex z-20 border-gray-800 items-center-justify-center absolute rounded-full border bg-gray-900 p-sm transition-colors duration-200 hover:bg-gray-850 p-2',
        direction === 'left' ? 'left-0' : 'right-0'
      )}
      onClick={onClick}
    >
      <Icon size={24} className='text-zinc-300' />
    </button>
  );
};
