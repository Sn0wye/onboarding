import { Step } from './step';
import { type ReactNode } from 'react';

import {
  CalendarCheck2,
  MonitorSmartphone,
  FolderTree,
  LucideIcon,
  FileText,
  CheckCircle
} from 'lucide-react';

interface Step {
  icon: LucideIcon;
  body: ReactNode;
}

export const steps: Step[] = [
  {
    icon: CalendarCheck2,
    body: (
      <Step
        title='Welcome to the Jungle!'
        text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          corporis repellat qui iure? Cum, blanditiis.'
        cta='See how Atmosphere works'
        key='step1'
      />
    )
  },
  {
    icon: MonitorSmartphone,
    body: (
      <Step
        title='Create Your Profile'
        text='Set up your profile to get started. Customize your information and
          preferences to make the experience yours.'
        cta='Next step'
        key='step2'
      />
    )
  },
  {
    icon: FolderTree,
    body: (
      <Step
        title='Discover Key Features'
        text='Explore all the powerful tools and features that will help you maximize your experience. Find what works best for you.'
        cta='Explore now'
        key='step3'
      />
    )
  },
  {
    icon: FileText,
    body: (
      <Step
        title='Customize Notifications'
        text='Make sure you never miss important updates. Set up notifications based on your preferences.'
        cta='Set up alerts'
        key='step4'
      />
    )
  },
  {
    icon: CheckCircle,
    body: (
      <Step
        title='You are Ready to Go!'
        text='You are all set! Start using the platform and take advantage of everything we offer.'
        cta='Start now'
        key='step5'
      />
    )
  }
];
