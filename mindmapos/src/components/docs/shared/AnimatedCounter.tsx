import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView, useSpring, useTransform } from 'motion/react';

interface AnimatedCounterProps {
  value: number;
  duration?: number;
  suffix?: string;
  decimals?: number;
}

export default function AnimatedCounter({ value, duration = 2, suffix = "", decimals = 0 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const count = useSpring(0, {
    duration: duration * 1000,
    bounce: 0,
  });

  const display = useTransform(count, (latest) => 
    latest.toLocaleString(undefined, { 
      minimumFractionDigits: decimals, 
      maximumFractionDigits: decimals 
    }) + suffix
  );

  useEffect(() => {
    if (isInView) {
      count.set(value);
    }
  }, [isInView, value, count]);

  return <motion.span ref={ref}>{display}</motion.span>;
}
