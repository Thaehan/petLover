import dayjs from 'dayjs';

export const msToTimeString = (ms: number) => {
  const time = dayjs(ms);
  return time.format('mm:ss');
};
