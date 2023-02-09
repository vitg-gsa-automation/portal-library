import { AxiosError } from 'axios';

export function wait(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export function getErrorMessage(error: unknown): string {
  let message = 'An unknown error occurred';
  if (error instanceof Error) message = error.message;
  if (error instanceof AxiosError) message = error.message;
  return message;
}

export function parseFileExt(fileName: string): string {
  const parts = fileName.split('.');
  if (parts.length < 2) return '';
  return parts[parts.length - 1];
}

export function formatBytes(bytes: number, decimals = 2) {
  if (!+bytes) return '0 Bytes';

  const k = 1024;
  const dm = decimals < 0 ? 0 : decimals;
  const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  const i = Math.floor(Math.log(bytes) / Math.log(k));

  return `${parseFloat((bytes / Math.pow(k, i)).toFixed(dm))} ${sizes[i]}`;
}

export function downloadJSON(json: string) {
  const data = json;
  const blob = new Blob([data], {
    type: 'application/json',
  });

  const element = document.createElement('a');
  element.href = URL.createObjectURL(blob);
  element.download = 'svrl.json';
  document.body.appendChild(element);
  element.click();
}
