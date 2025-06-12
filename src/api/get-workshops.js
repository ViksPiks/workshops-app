const WORKSHOPS_URL = "https://motointegrator.com/api/search/v4/workshop";

export const getWorkshops = async (page = 1, perPage = 10) => {
  const response = await fetch(
    `${WORKSHOPS_URL}?locale=en&market=PL&page=${page}&perPage=${perPage}`
  );
  const { results: workshops, pagination } = await response.json();

  return { workshops, pagination };
};
