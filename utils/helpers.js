import axios from 'axios';

export const isEmpty = (value) => {
    return (
        value === undefined ||
        value === null ||
        (typeof value === 'object' && Object.keys(value).length === 0) ||
        (typeof value === 'string' && value.trim().length === 0)
    );
};

export const getElementFromDivision = (string, delimiter, element) => {
    return string.split(delimiter)[element];
};

export const axiosGet = async (endpoint, config) => {
    const response = await axios
        .get(endpoint, { headers: config?.headers || headers })
        .catch((error) => console.log("error",error));
    return response;
};