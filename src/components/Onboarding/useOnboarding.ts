import { create } from 'zustand';

type Context = {
  currentStep: number;
  lastStep: number;
  nextStep: () => void;
  prevStep: () => void;
  setStep: (step: number) => void;
};

export const useOnboarding = create<Context>(set => ({
  currentStep: 0,
  lastStep: 4,
  nextStep: () =>
    set(state => ({
      currentStep: Math.min(state.currentStep + 1, state.lastStep)
    })),
  prevStep: () =>
    set(state => ({
      currentStep: Math.max(state.currentStep - 1, 0)
    })),
  setStep: step => set({ currentStep: step })
}));
