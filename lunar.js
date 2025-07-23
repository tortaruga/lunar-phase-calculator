const year = document.getElementById('year');
const month = document.getElementById('month');
const day = document.getElementById('day');
const result = document.getElementById('result');
const dateForm = document.getElementById('date-form');
const phaseImg = document.querySelector('.phase-img');
const resultDisplay = document.querySelector('.result-display');

let myDate;

dateForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const yearValue = year.value;
  const monthValue = validateFormat(month.value);
  const dayValue = validateFormat(day.value); 

if (yearValue && monthValue && dayValue) {
  myDate = new Date(`${yearValue}-${monthValue}-${dayValue}`);
} else {
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
  if (daysSinceNewMoon < 1.84566173161) {
    phase = 'New Moon';
  } else if (daysSinceNewMoon < 5.53698519483) {
    phase = 'Waxing Crescent';
  } else if (daysSinceNewMoon < 9.22830865805) {
    phase = 'First Quarter';
  } else if (daysSinceNewMoon < 12.91963212127) {
    phase = 'Waxing Gibbous';
  } else if (daysSinceNewMoon < 16.61095558449) {
    phase = 'Full Moon';
  } else if (daysSinceNewMoon < 20.30227904771) {
    phase = 'Waning Gibbous';
  } else if (daysSinceNewMoon <= 23.99360251093) {
    phase = 'Last Quarter';
  } else if (daysSinceNewMoon < 27.68492597415) {
    phase = 'Waning Crescent';
  }

  showResult();
  result.innerHTML = phase;
  phaseImg.src = phaseImage(phase);
}


function phaseImage(phase) {
  let resultImg;

   switch (phase) {
    case 'New Moon':
          resultImg = './images/new.png';
          break;
    case 'Waxing Crescent':
          resultImg = './images/waxing-crescent.png';
          break;
    case 'First Quarter':
          resultImg = './images/first-quarter.png';
          break;
    case 'Waxing Gibbous':
          resultImg = './images/waxing-gibbous.png';
          break;
    case 'Full Moon':
          resultImg = './images/full.png';
          break;
    case 'Waning Gibbous':
          resultImg = './images/waning-gibbous.png';
          break;
    case 'Last Quarter':
          resultImg = './images/last-quarter.png';
          break;
    case 'Waning Crescent':
          resultImg = './images/waning-crescent.png';
          break;
   }
   return resultImg;
}

function showResult() {
  resultDisplay.style.display = 'inline-block';
}