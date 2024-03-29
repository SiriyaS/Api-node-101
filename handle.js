// logic

// funnction :
// assignment1
// assignment2

const moment = require('moment');
const createCsvWriter = require('csv-writer').createObjectCsvWriter;

// moment
const SLASH_DMYHMS = 'DD/MM/YYYY, h:mm:ss a';
const SLASH_DMY = 'DD/MM/YYYY';

// csv
const csvWriter = createCsvWriter({
    path: 'personal.csv',
    header: [
      {id: 'name', title: 'Name'},
      {id: 'age', title: 'Age'},
      {id: 'school', title: 'School'},
      {id: 'major', title: 'Major'},
      {id: 'faculty', title: 'Faculty'},
    ]
  });

function assignment1(num){
    console.log('sysdate ::==',moment().format(SLASH_DMYHMS));
    console.log(`${num} days ago ::==`,moment().subtract(num, 'days').format('DD/MM/YYYY, 12:00:00 a'));
    console.log(`next ${num} days ::==`,moment().add(num, 'days').format('DD/MM/YYYY, 12:00:00 a'));
    var date = {
        date_time_current : moment().format(SLASH_DMY),
        after_date_time_current : moment().subtract(num, 'days').format(SLASH_DMY),
        before_date_time_current : moment().add(num, 'days').format(SLASH_DMY),
    };
    return date;
}

function assignment2(data){
    // console.log(data);
    const personal = [
      {
        name: data.name,
        age: data.age,
        school: data.school,
        major: data.major,
        faculty: data.faculty,
      }
    ];
    csvWriter
  .writeRecords(personal)
  .then(()=> console.log('The CSV file was written successfully'));

}

module.exports = {
    // คนอื่นเรียกใช้ : ชื่อในนี้
    assignment1 : assignment1,
    assignment2 : assignment2
}