// src/data/RedesSocialesData.ts
import { Facebook, Instagram, Youtube } from 'lucide-react';
import { SiTiktok } from 'react-icons/si';
import { SocialMedia } from '@/types/RedesSocialesTypes';

export const socialMediaData: SocialMedia[] = [
  {
    id: 'facebook',
    name: 'Facebook',
    icon: Facebook,
    url: 'https://www.facebook.com/tarotdeoshodahiana/?locale=es_LA',
    username: 'AbsolutoUniversal',
    followers: '15.2K',
    description: 'Comunidad de almas conscientes',
    gradient: 'from-blue-500/20 to-purple-500/20',
    iconColor: 'text-blue-400',
    accentColor: '#3b82f6'
  },
  {
    id: 'instagram',
    name: 'Instagram',
    icon: Instagram,
    url: 'https://www.instagram.com/absoluto_universal?igsh=ZGM5Nnp5cmU0NHg4',
    username: 'AbsolutoUniversal',
    followers: '28.5K',
    description: 'Portal visual de transformación',
    gradient: 'from-pink-500/20 to-purple-500/20',
    iconColor: 'text-pink-400',
    accentColor: '#ec4899'
  },
  {
    id: 'tiktok',
    name: 'TikTok',
    icon: SiTiktok,
    url: 'https://www.tiktok.com/@absoluto_universal?is_from_webapp=1&sender_device=pc',
    username: 'AbsolutoUniversal',
    followers: '42.8K',
    description: 'Sabiduría en movimiento',
    gradient: 'from-purple-500/20 to-violet-500/20',
    iconColor: 'text-purple-400',
    accentColor: '#a855f7'
  },
  {
    id: 'youtube',
    name: 'YouTube',
    icon: Youtube,
    url: 'https://www.youtube.com/@absolutouniversal',
    username: 'AbsolutoUniversal',
    followers: '35.1K',
    description: 'Charlas y meditaciones guiadas',
    gradient: 'from-red-500/20 to-purple-500/20',
    iconColor: 'text-red-400',
    accentColor: '#ef4444'
  }
];
