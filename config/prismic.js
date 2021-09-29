import Prismic from '@prismicio/client';

const apiEndpoint = 'https://furbo-prismic.cdn.prismic.io/api/v2';
const accessToken =
    'MC5ZUnlvUFJJQUFDZ0E4RVlF.JO-_ve-_ve-_vSrvv73vv73vv70eQO-_ve-_vRwG77-9QDHvv73vv71fAisCR3bvv702SO-_vQ7vv73vv70';
    
export const client = Prismic.client(apiEndpoint, {
    accessToken,
});
