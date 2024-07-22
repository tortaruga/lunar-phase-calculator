const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const result = document.getElementById('result');
const dateForm = document.getElementById('date-form');

let myDate;

dateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const yearValue = year.value;
  const monthValue = validateFormat(month.value);
  const dayValue = validateFormat(day.value); 

  myDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
  if (!myDate) {
    myDate = new Date();
  }
  getPhase(myDate)
})

function validateFormat(value) {
  return (value.length < 2 && value[0] !== 0) ? '0' + value : value;
}

const fullCycleDuration = 29.53;
const phaseDuration = fullCycleDuration / 8; 

const newMoon = new Date('2000-01-06T12:24:01Z');
const newMoonJulian = toJulianDate(newMoon);

function toJulianDate(date) {
  return (date.getTime() / 86400000) - (date.getTimezoneOffset() / 1440) + 2440587.5;
}

function getPhase(date) {
  const dateJulian = toJulianDate(date);
  const moonAge = (dateJulian - newMoonJulian) % fullCycleDuration;
  const daysSinceNewMoon = (moonAge + fullCycleDuration) % fullCycleDuration;

  let phase;
  if (daysSinceNewMoon < 1.845) {
    phase = 'New Moon';
  } else if (daysSinceNewMoon < 5.536) {
    phase = 'Waxing Crescent';
  } else if (daysSinceNewMoon < 9.228) {
    phase = 'First Quarter';
  } else if (daysSinceNewMoon < 12.92) {
    phase = 'Waxing Gibbous';
  } else if (daysSinceNewMoon < 16.61) {
    phase = 'Full Moon';
  } else if (daysSinceNewMoon < 20.302) {
    phase = 'Waning Gibbous';
  } else if (daysSinceNewMoon < 23.994) {
    phase = 'Last Quarter';
  } else {
    phase = 'Waning Crescent';
  }

  result.innerHTML = phase + ' ' + phaseEmoji(phase);
}


function phaseEmoji(phase) {
  let moonEmoji;

   switch (phase) {
    case 'New Moon':
          moonEmoji = '🌑';
          break;
    case 'Waxing Crescent':
          moonEmoji = '🌒';
          break;
    case 'First Quarter':
          moonEmoji = '🌓';
          break;
    case 'Waxing Gibbous':
          moonEmoji = '🌔';
          break;
    case 'Full Moon':
          moonEmoji = '🌕';
          break;
    case 'Waning Gibbous':
          moonEmoji = '🌖';
          break;
    case 'Last Quarter':
          moonEmoji = '🌗';
          break;
    case 'Waning Crescent':
          moonEmoji = '🌘';
          break;
   }
   return moonEmoji;
}