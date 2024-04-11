
export class HelperClass {
  static getDaysArray(year: any, month: any) {
    let monthIndex = month - 1;
    let names = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    let date = new Date(year, monthIndex, 1);
    let result = [];
    while (date.getMonth() == monthIndex) {
      let da: any = date.getDate();
      if (da < 10) {
        da = `0${date.getDate()}`
      }

      let mont: any = Number(date.getMonth()) + 1;
      if (mont < 10) {
        mont = `0${mont}`;
      }
      result.push({ day: names[date.getDay()], date: date.getFullYear() + '-' + mont + '-' + da, wholeDay: da.toString() });
      date.setDate(date.getDate() + 1);
    }
    return result;
  }
}