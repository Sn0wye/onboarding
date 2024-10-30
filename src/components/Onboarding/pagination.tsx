import { cn } from '@/lib/utils';
import { steps } from './helper';
import { useOnboarding } from './useOnboarding';

export const Pagination = () => {
  const currentStep = useOnboarding(state => state.currentStep);
  const setStep = useOnboarding(state => state.setStep);

  return (
    <div className='flex items-center gap-3'>
      {steps.map((_, index) => (
        <button
          type='button'
          key={index}
          className={cn(
            'h-[6px] w-[6px] rounded-full transition-all duration-300',
            index === currentStep ? 'bg-gray-500' : 'bg-gray-800'
          )}
          onClick={() => setStep(index)}
        />
      ))}
    </div>
  );
};
