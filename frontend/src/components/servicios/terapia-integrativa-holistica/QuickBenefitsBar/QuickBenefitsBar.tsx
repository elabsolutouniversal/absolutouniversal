'use client';

import { Clock, Gift, TrendingUp, Shield } from 'lucide-react';
import { motion } from 'framer-motion';
import clsx from 'clsx';
import type { ReactNode, CSSProperties } from 'react';

type Item = { icon: ReactNode; text: string; href?: string };

// Ítems por defecto
const DEFAULT_ITEMS: Item[] = [
  { icon: <Clock className="w-5 h-5" />, text: '5 sesiones transformadoras' },
  { icon: <Gift className="w-5 h-5" />, text: 'Última sesión gratuita' },
  { icon: <TrendingUp className="w-5 h-5" />, text: 'Resultados comprobados' },
  { icon: <Shield className="w-5 h-5" />, text: '100% personalizado' },
];

// ---- Tipos ----
type BaseProps = {
  items?: Item[];
  className?: string;
  listClassName?: string;
};

type StaticProps = BaseProps & {
  variant?: 'static';
};

type FloatingProps = BaseProps & {
  variant: 'floating';
  /** px desde el final del hero hasta la PARTE SUPERIOR de la barra */
  gapTop?: number;
  /** px de espacio hacia la siguiente sección (se crea un spacer invisible) */
  gapBottom?: number;
};

type Props = StaticProps | FloatingProps;

// ---- Componente ----
export default function QuickBenefitsBar(props: Props) {
  const {
    items = DEFAULT_ITEMS,
    className,
    listClassName,
  } = props;

  const isFloating = props.variant === 'floating';

  // Estilos / cálculos sólo para floating
  const style: CSSProperties = {};
  let spacerHeight = 0;

  if (isFloating) {
    const gapTop = props.gapTop ?? 56;
    const gapBottom = props.gapBottom ?? 40;
    style.bottom = `-${gapTop}px`;
    spacerHeight = gapTop + gapBottom;
  }

  const bar = (
    <motion.aside
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      style={style}
      className={clsx(
        className,
        isFloating
          ? 'pointer-events-none absolute left-1/2 -translate-x-1/2 z-30 hidden md:block'
          : 'relative pointer-events-auto'
      )}
    >
      <div className="pointer-events-auto w-full px-4 md:px-0 md:max-w-[72rem] mx-auto">
        <ul
          className={clsx(
            `bg-white/95 backdrop-blur-md border border-gray-100 shadow-xl rounded-3xl
             px-6 py-5 md:px-10 md:py-7
             grid grid-cols-1 gap-4 sm:grid-cols-2
             md:flex md:flex-nowrap md:items-center md:justify-center md:gap-10`,
            listClassName
          )}
        >
          {items.map((item, i) => {
            const Tag = (item.href ? 'a' : 'div') as React.ElementType;
            return (
              <li key={i} className="flex justify-center md:justify-start">
                <Tag
                  {...(item.href ? { href: item.href } : {})}
                  className="flex items-center gap-3 text-sm md:text-base text-gray-700 font-medium
                             px-3 py-2 rounded-full md:px-4 md:py-2
                             hover:bg-gray-100/80 transition-colors
                             focus-visible:ring-2 focus-visible:ring-pink-400 outline-none"
                >
                  <span className="text-purple-600">{item.icon}</span>
                  <span className="text-center md:text-left leading-snug md:whitespace-nowrap">
                    {item.text}
                  </span>
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </motion.aside>
  );

  if (!isFloating) return bar;

  // Floating: devolvemos barra + spacer abajo
  return (
    <>
      {bar}
      <div aria-hidden className="hidden md:block" style={{ height: spacerHeight }} />
    </>
  );
}