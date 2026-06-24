import type { ComponentType } from 'react';
import type { IconBaseProps } from 'react-icons';
import { FaWhatsapp } from 'react-icons/fa';

const Icon = FaWhatsapp as ComponentType<IconBaseProps>;

export default function WhatsAppIcon(props: IconBaseProps) {
  return <Icon {...props} />;
}
