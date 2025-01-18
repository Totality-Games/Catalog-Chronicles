const baseUrl = import.meta.env.VITE_API_ENDPOINT;

export const apiFetch = async () => {
  const fetchedPlayerDataRes = await fetch(`${baseUrl}/player`, {
    method: 'GET',
  });

  const playerData = fetchedPlayerDataRes.json();
  return playerData;
};
