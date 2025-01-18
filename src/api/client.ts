const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const fetchPlayerData = async () => {
  const fetchedData = await fetch(`${baseUrl}/player`, {
    method: 'GET',
  });

  const playerData = await fetchedData.json().then((data) => {
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
    return data;
  });
  return libraryData;
};

export const fetchFriendData = async (friend: string) => {
  const fetchedData = await fetch(`${baseUrl}/friends/${friend}`, {
    method: 'GET',
  });

  const friendData = await fetchedData.json().then((data) => {
    return data;
  });

  return friendData;
};
