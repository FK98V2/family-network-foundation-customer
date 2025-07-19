import { format } from 'date-fns';
import { th } from 'date-fns/locale/th';
import dayjs from 'dayjs';

const thaiMonths = [
  'มกราคม',
  'กุมภาพันธ์',
  'มีนาคม',
  'เมษายน',
  'พฤษภาคม',
  'มิถุนายน',
  'กรกฎาคม',
  'สิงหาคม',
  'กันยายน',
  'ตุลาคม',
  'พฤศจิกายน',
  'ธันวาคม',
];

export function formatDateTime(timestamp: number) {
  return `${formatDate(timestamp)} ${formatTime(timestamp)}`;
}

export function formatDate(timestamp: number) {
  const date = new Date(timestamp);
  const buddhistYear = date.getFullYear() + 543;

  const formattedDate = format(date, 'dd/MM', { locale: th });

  return `${formattedDate}/${buddhistYear}`;
}

export function formatTime(timestamp: number) {
  const formattedTime = format(timestamp, 'HH:mm', { locale: th });
  return formattedTime;
}

export function convertToHHMM(hour: number, minute: number) {
  return dayjs().hour(hour).minute(minute);
}

export function formatThaiDate(
  timestamp: number,
  timestampType: 'timestamp' | 'date' = 'timestamp'
): string {
  const date =
    timestampType === 'timestamp'
      ? new Date(timestamp * 1000)
      : new Date(timestamp);

  const day = date.getDate();
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + 543;

  return `${day} ${month} ${year}`;
}

export function formatThaiTime(timestamp: number): string {
  const date = new Date(timestamp * 1000);

  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `เวลา ${hours}:${minutes}:${seconds}`;
}

export function formatThaiDateTime(timestamp: number | string): string {
  const date = new Date(timestamp);
  const day = date.getDate().toString().padStart(2, '0');
  const month = thaiMonths[date.getMonth()];
  const year = date.getFullYear() + 543;
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  return `${day} ${month} ${year} ${hours}:${minutes}`;
}

export function formatDuration(duration: number) {
  const hours = Math.floor(duration / 3600);
  const minutes = Math.floor((duration % 3600) / 60);
  const seconds = duration % 60;
  return `${hours > 0 ? `${hours} ชั่วโมง` : ''} ${
    minutes > 0 ? `${minutes} นาที` : ''
  } ${seconds > 0 ? `${seconds} วินาที` : ''}`;
}
