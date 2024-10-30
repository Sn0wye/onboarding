import { Onboarding } from '@/components/Onboarding';

export default function Home() {
  return (
    <main className='flex flex-col items-center justify-center h-screen bg-gray-900 mx-auto w-full flex-1 px-3 py-4 sm:px-6 sm:py-6'>
      <Onboarding />
    </main>
  );
}
