//npm i -g jest
//run test => jest 
const Handle = require("./handle")

test('dateTime current', () => {
    let res = Handle.assignment1(50)
    expect(res.date_time_cerrent.trim().slice(0,10)).toBe("22/12/2019");
    expect(res.after_date_time_cerrent.trim().slice(0,10)).toBe("02/11/2019");
    expect(res.before_date_time_cerrent.trim().slice(0,10)).toBe("10/02/2020");
  });

  test('dateTime current', () => {
    let res = Handle.assignment1("ei! ei!")
    expect(res.error).toBe('[assignment1] data request invalid is not a number');

  });

