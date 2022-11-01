import fetch from 'unfetch';

const checkStatus = response => {
    if (response.ok) {
        return response;
    }
    // convert non-2xx HTTP responses into errors:
    const error = new Error(response.statusText);
    error.response = response;
    return Promise.reject(error);
}

export const getAllStudents = () =>
    fetch("api/v1/students")
        .then(checkStatus);

export const addStudent = student =>
     fetch("api/v1/students", {
        headers: {
            'content-Type': 'application/json'
        }, method: 'POST',
        body: JSON.stringify(student)
    }).then(checkStatus);

export const deleteStudent = id =>
    fetch(`api/v1/students/${id}`,{
        method: 'DELETE'
    }).then(checkStatus);
