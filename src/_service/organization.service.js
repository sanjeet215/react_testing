//import config from 'config';

export const organizationService = {
    getOrganizationList
};

function getOrganizationList() {
    const requestOptions = {
        method: 'GET',
        //headers: authHeader()
    };

    //return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse);
    return fetch(`http://localhost:8080/api/org`, requestOptions).then(handleResponse);
}

function handleResponse(response){
    console.log(response);
}