// src/components/SocialMedia/types.ts
import { LucideIcon } from 'lucide-react';

export interface SocialMedia {
  id: string;
  name: string;
  icon: LucideIcon | React.FC<{ className?: string }>;
  url: string;
  username: string;
  followers: string;
  description: string;
  gradient: string;
  iconColor: string;
  accentColor: string;
}