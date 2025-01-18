const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const fetchPlayerData = async () => {
  const fetchedData = await fetch(`${baseUrl}/player`, {
    method: 'GET',
  });

  const playerData = await fetchedData.json().then((data) => {
    console.log(data);
    return data;
  });
  return playerData;
};

export const fetchLibraryData = async () => {
  // TODO: Add number of library & player ID to fetch call
  const fetchedData = await fetch(`${baseUrl}/library`, {
    method: 'GET',
  });

  const libraryData = await fetchedData.json().then((data) => {
    console.log(data);
    return data;
  });
  return libraryData;
};
