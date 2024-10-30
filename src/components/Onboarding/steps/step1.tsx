import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import { useOnboarding } from '../useOnboarding';
import { motion } from 'framer-motion';

export function Step1() {
  const nextStep = useOnboarding(state => state.nextStep);

  return (
    <div className='flex flex-col w-full max-w-lg h-fit text-center items-center'>
      <div className='flex flex-col items-center text-center gap-4'>
        <h1 className='mb-2 text-2xl font-semibold text-gray-50'>
          Welcome to the Jungle!
        </h1>
        <p className='text-zinc-400 mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          corporis repellat qui iure? Cum, blanditiis.
        </p>
      </div>

      <motion.div
        key='step1'
        initial={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, y: 10 }}
        className='flex flex-col gap-3 items-center w-full'
      >
        <Button className='w-fit group' size='sm' onClick={nextStep}>
          See how Atmosphere works
          <ChevronRight className='ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform' />
        </Button>

        <Link
          href='/'
          className='text-sm dark:text-zinc-300 text-zinc-200 hover:underline hover:underline-offset-1 transition-all'
        >
          Skip Onboarding?
        </Link>
      </motion.div>
    </div>
  );
}
