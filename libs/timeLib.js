const moment = require('moment')
const momenttz = require('moment-timezone')
const timeZone = 'Asia/Calcutta'

let now = () => {
 return moment.utc().format()
}

let getLocalTime = () => {
    console.log('getLocalTime is called for timezone' + "" + timeZone)
    let temp = moment().tz(timeZone).format();
    console.log(temp);
    return temp;

}

let convertToLocalTime = () => {
    let timezone = momenttz.tz.guess(true);
    return momenttz.tz(timezone).format('LLLL')
}

module.exports = {
    now: now,
    getLocalTime: getLocalTime,
    convertToLocalTime: convertToLocalTime
}