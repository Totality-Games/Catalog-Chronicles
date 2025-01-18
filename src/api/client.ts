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
