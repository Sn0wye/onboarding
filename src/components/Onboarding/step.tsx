import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useOnboarding } from './useOnboarding';
import { motion } from 'framer-motion';

type StepProps = {
  key: string;
  title: string;
  text: string;
  cta: string;
};

export function Step({ key, title, text, cta }: StepProps) {
  const nextStep = useOnboarding(state => state.nextStep);

  return (
    <motion.div
      key={key}
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      className='flex flex-col w-full max-w-lg h-fit text-center items-center'
    >
      <div className='flex flex-col items-center text-center gap-4'>
        <h1 className='mb-2 text-2xl font-semibold text-gray-50'>{title}</h1>
        <p className='text-zinc-400 mb-6'>{text}</p>
      </div>

      <div className='flex flex-col gap-3 items-center w-full'>
        <Button className='w-fit group' size='sm' onClick={nextStep}>
          {cta}
          <ChevronRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
        </Button>

        <Link
          href='/'
          className='text-sm dark:text-zinc-300 text-zinc-200 hover:underline hover:underline-offset-1 transition-all'
        >
          Skip Onboarding?
        </Link>
      </div>
    </motion.div>
  );
}
