'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import { FaTelegramPlane } from 'react-icons/fa';

const TELEGRAM_BOT_URL = 'https://t.me/onetrace_bot'; 

interface TelegramButtonProps {
  text: string; 
}

export default function CustomButton({ text }: TelegramButtonProps) {
  return (
    <Link 
      href={TELEGRAM_BOT_URL}
      target="_blank" 
      rel="noopener noreferrer"
      className={styles.button}>
      <FaTelegramPlane className={styles.icon} />
      <span>{text}</span>
    </Link>
  );
}