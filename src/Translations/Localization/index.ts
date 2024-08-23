import dayjs from 'dayjs';
import updateLocale from 'dayjs/plugin/updateLocale';
import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';
import 'dayjs/locale/vi';
import 'dayjs/locale/en';

dayjs.extend(updateLocale);
dayjs.extend(localizedFormat);
dayjs.extend(relativeTime);

//Setup for EN
const EN_RELATIVE_TIME = {
  future: '%s seconds.',
  past: '%s seonds ago.',
  s: '1 second.',
  ss: '%s seconds.',
  m: '1 minute.',
  mm: '%d minutes.',
  h: '1 hour.',
  hh: '%d hours.',
  d: '1 day.',
  dd: '%d days.',
  M: '1 month.',
  MM: '%d months.',
  y: '1 year.',
  yy: '%d years.',
};
const EN_CALENDAR = {
  sameDay: '[Today at] LT',
  nextDay: '[Tomorrow at] LT',
  nextWeek: 'dddd [at] LT',
  lastDay: '[Yesterday at] LT',
  lastWeek: '[Last] dddd [at] LT',
  sameElse: 'L',
};

//Setup for VI
const VI_RELATIVE_TIME = {
  future: '%s giây.',
  past: '%s giây.',
  s: '1 giây.',
  ss: '%s giây.',
  m: '1 phút.',
  mm: '%d phút.',
  h: '1 giờ.',
  hh: '%d giờ.',
  d: '1 ngày.',
  dd: '%d ngày.',
  M: '1 tháng.',
  MM: '%d tháng.',
  y: '1 năm.',
  yy: '%d năm.',
};
const VI_CALENDAR = {
  sameDay: '[Hôm nay lúc] LT',
  nextDay: '[Ngày mai lúc] LT',
  nextWeek: 'dddd [lúc] LT',
  lastDay: '[Hôm qua lúc] LT',
  lastWeek: '[Tuần trước vào] dddd [lúc] LT',
  sameElse: 'L',
};

dayjs.updateLocale('vi', {
  calendar: VI_CALENDAR,
  relativeTime: VI_RELATIVE_TIME,
});

dayjs.updateLocale('en', {
  calendar: EN_CALENDAR,
  relativeTime: EN_RELATIVE_TIME,
});

export default dayjs;
