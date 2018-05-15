//function that retrieves the authToken from local storage
export const loadAuthToken = () => {
	return localStorage.getItem('authToken');
};

//function that saves the authToken to local storage
export const saveAuthToken = authToken => {
	try {
		localStorage.setItem('authToken', authToken);
	} catch(e) {}
};


//function to delete the authToken from local storage
export const clearAuthToken = () => {
	try {
		localStorage.removeItem('authToken');
	} catch(e) {}
};