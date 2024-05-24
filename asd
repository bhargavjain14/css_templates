import * as moment from 'moment';

interface EventItem {
  eventDate: number; // Unix epoch timestamp
  name: string;
}

function filterByEventDate(events: EventItem[]): Record<string, number> {
  const today = moment().startOf('day');
  const oneWeekAgo = moment().subtract(1, 'weeks').startOf('day');
  const twoWeeksAgo = moment().subtract(2, 'weeks').startOf('day');
  const threeWeeksAgo = moment().subtract(3, 'weeks').startOf('day');

  let todayCount = 0;
  let oneWeekCount = 0;
  let twoWeeksCount = 0;
  let threeWeeksCount = 0;
  let moreThanThreeWeeksCount = 0;

  events.forEach(event => {
    const eventMoment = moment(event.eventDate * 1000); // Convert to milliseconds
    if (eventMoment.isSame(today, 'day')) {
      todayCount++;
    } else if (eventMoment.isBetween(oneWeekAgo, today, 'day', '[)')) {
      oneWeekCount++;
    } else if (eventMoment.isBetween(twoWeeksAgo, oneWeekAgo, 'day', '[)')) {
      twoWeeksCount++;
    } else if (eventMoment.isBetween(threeWeeksAgo, twoWeeksAgo, 'day', '[)')) {
      threeWeeksCount++;
    } else if (eventMoment.isBefore(threeWeeksAgo)) {
      moreThanThreeWeeksCount++;
    }
  });

  return {
    "today": todayCount,
    '1 week': oneWeekCount,
    '2 weeks': twoWeeksCount,
    '3 weeks': threeWeeksCount,
    'more than 3': moreThanThreeWeeksCount
  };
}

// Example usage:
const events: EventItem[] = [{ eventDate: 1666732200, name: 'Ramesh' }]; // Example Unix epoch timestamp for 10/26/2024
const filteredCounts = filterByEventDate(events);
console.log(filteredCounts);
