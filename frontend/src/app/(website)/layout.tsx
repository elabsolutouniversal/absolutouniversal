import MainLayout from '@/components/layouts/MainLayout';
import { metadata } from './metadata';

export { metadata };

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return <MainLayout>{children}</MainLayout>;
}