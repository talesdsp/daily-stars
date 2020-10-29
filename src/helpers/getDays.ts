export function getLast7Days() {
  return [...Array(7)].map((_, i) => {
    const rawDate = new Date(Date.now() - 86400000 * i)
      .toLocaleDateString("en-us")
      .split(/[\/\-]/g);

    return formatDate(rawDate);
  });
}

export function getBonusDay() {
  const rawDate = new Date(Date.now() - 86400000 * 7)
    .toLocaleDateString("en-us")
    .split(/[\/\-]/g);

  return formatDate(rawDate);
}

export function formatDate(rawDate: string[]) {
  let month = rawDate[0],
    day = rawDate[1],
    year = rawDate[2];

  if (month.length === 1) month = "0" + month;

  if (day.length === 1) day = "0" + day;

  return `${year}-${month}-${day}`;
}
