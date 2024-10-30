import { create } from 'zustand';

type Context = {
  currentStep: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
};

export const useOnboarding = create<Context>(set => ({
  currentStep: 0,
  nextStep: () => set(state => ({ currentStep: state.currentStep + 1 })),
  prevStep: () => set(state => ({ currentStep: state.currentStep - 1 })),
  setStep: (step: number) => set({ currentStep: step })
}));
