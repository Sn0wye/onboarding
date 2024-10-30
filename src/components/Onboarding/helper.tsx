import { Step1 } from './steps/step1';
import { Step2 } from './steps/step2';
import { type ReactNode } from 'react';

import {
  CalendarCheck2,
  MonitorSmartphone,
  FolderTree,
  LucideIcon
} from 'lucide-react';

interface Step {
  icon: LucideIcon;
  body: ReactNode;
}

export const steps: Step[] = [
  {
    icon: CalendarCheck2,
    body: <Step1 />
  },
  {
    icon: MonitorSmartphone,
    body: <Step2 />
  },
  {
    icon: FolderTree,
    body: <Step1 />
  },
  {
    icon: FolderTree,
    body: <Step1 />
  },
  {
    icon: FolderTree,
    body: <Step1 />
  }
];
