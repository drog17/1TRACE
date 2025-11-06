// components/TelegramButton/TelegramButton.tsx
'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import { FaTelegramPlane } from 'react-icons/fa'; // Используем популярную библиотеку иконок

const TELEGRAM_BOT_URL = 'https://t.me/onetrace_bot'; 

interface TelegramButtonProps {
  text: string; // Текст кнопки, например, "Go to Telegram Bot"
}

export default function CustomButton({ text }: TelegramButtonProps) {
  return (
    <Link 
      href={TELEGRAM_BOT_URL}
      target="_blank" // Открывает ссылку в новой вкладке
      rel="noopener noreferrer" // Рекомендовано для target="_blank"
      className={styles.button}>
      <FaTelegramPlane className={styles.icon} />
      <span>{text}</span>
    </Link>
  );
}