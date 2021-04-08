export function get(url) {
    return new Promise(function (resolve, reject) {
        fetch(url, {
            method: "GET",
        }).then(function (response) {
            if (response.status === 200) {
                return response.json();
            } else {
                resolve([]);
            }
        }).then(function (response) {
            resolve(response);
        }).catch(err => {
            reject([]);
        });
    });
}