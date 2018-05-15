//code to handle errors from the API, making them more user friendly
export const normalizeResponseErrors = res => {
	//if we don't get an 'ok' response from the server 
	if(!res.ok) {
		//if the response headers have a content-type and the content-type is application/json
		if(res.headers.has('content-type') && res.headers.get('content-type').startsWith('application/json')) {
			//return the err as a json object
			return res.json().then(err => Promise.reject(err));
		}
		//return the err with the specified object
		return Promise.reject({
			code: res.status,
			message: res.statusText
		});
	}
	//if all is well, return the response
	return res;
};