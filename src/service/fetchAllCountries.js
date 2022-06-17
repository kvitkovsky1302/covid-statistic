async function fetchAllCountries(searchQuery, page) {
  const url = 'https://api.covid19api.com/summary';

  const response = await fetch(url);
  const countries = await response.json();
  return countries;
}

export default fetchAllCountries;
