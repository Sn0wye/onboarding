'use client';

import { steps } from './helper';
import { cn } from '@/lib/utils';
import { useOnboarding } from './useOnboarding';
import { Pagination } from './pagination';
import { NavigationButton } from './navigation';

export function Onboarding() {
  const { currentStep, setStep } = useOnboarding();

  return (
    <div className='flex-col flex h-1/2 w-full items-center justify-between gap-24'>
      <figure className='w-3/4 mx-auto flex flex-col items-center gap-4'>
        <Pagination />

        <div className='relative my-2 flex h-32 w-full items-center overflow-x-hidden'>
          <NavigationButton direction='left' disabled={currentStep === 0} />
          {steps.map((step, index) => (
            <button
              key={index}
              type='button'
              className={cn(
                'absolute -translate-x-1/2 rounded-full border-4 bg-primary transition-all duration-300 border-gray-900 !left-1/2 z-20 scale-75',
                index === currentStep && '!left-1/2 scale-100',
                index < currentStep &&
                  `!left-[calc(50%-${(currentStep - index) * 10}%)] left-[0%]`,
                index > currentStep &&
                  `!left-[calc(50%+${(index - currentStep) * 10}%)] left-[100%]`
              )}
              onClick={() => setStep(index)}
            >
              <div
                className={cn(
                  'rounded-full border p-4 transition-all duration-300 ',
                  index === currentStep
                    ? 'border-purple-400 bg-purple-950'
                    : 'border-gray-800 bg-gray-900'
                )}
              >
                <step.icon
                  size={index === currentStep ? 32 : 24}
                  className='text-white'
                />
              </div>
            </button>
          ))}
          <NavigationButton
            direction='right'
            disabled={currentStep === steps.length - 1}
          />
          <div className='z-10 relative h-px flex-1 px-2 line-gradient'></div>
        </div>
      </figure>

      <section className='w-full max-w-7xl flex items-center justify-center'>
        {steps[currentStep].body}
      </section>
    </div>
  );
}
