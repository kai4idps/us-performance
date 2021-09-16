export const axiosGet = async (endpoint, config) => {
    const response = await axios
        .get(endpoint, { headers: config?.headers || headers })
        .catch((error) => console.error(error));
    return response;
};