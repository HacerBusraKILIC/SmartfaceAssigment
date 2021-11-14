import {Platform} from 'react-native';
var mthNames = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const formatterDate = (date: string) => {
  var d = new Date(Date.parse(date));
  Platform.OS === 'android' &&
    d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
  var month = '' + (d.getMonth() + 1),
    day = '' + d.getDate(),
    year = d.getFullYear(),
    hours = '' + d.getHours(),
    minutes = '' + d.getMinutes(),
    seconds = '' + d.getSeconds();
  if (month.length < 2) {
    month = '0' + month;
  }
  if (day.length < 2) {
    day = '0' + day;
  }
  if (minutes.length < 2) {
    minutes = '0' + minutes;
  }
  if (hours.length < 2) {
    hours = '0' + hours;
  }
  return (
    [day, mthNames[month - 1]].join(' ') + ' , ' + [hours, minutes].join(':')
  );
};
