export const app = {
	ERROR: 'app/error',
	LOADED: 'app/loaded',
	LOADING: 'app/loading'
};

export const auth = {
	LOGIN_SUCCESS: 'app/auth/login/success',
	LOGOUT_SUCCESS: 'app/auth/logout/success'
};

export const posts = {
	CREATE: 'app/post/create',
	GET: 'app/post/get',
	LIKE: 'app/post/like',
	NEXT: 'app/post/paginate/next',
	UNLIKE: 'app/post/unlike',
	UPDATE_LINKS: 'app/post/paginate/update'
};

export const comments = {
	CREATE: 'app/comments/create',
	GET: 'app/comments/get',
	SHOW: 'app/comments/show',
	TOGGLE: 'app/comments/toggle'
};

export const phones = {
	START: 'app/phones/fetch/start',
	SUCCESS: 'app/phones/fetch/success',
	FAILURE: 'app/phones/fetch/failure'
};

export const phone = {
	START: 'FETCH_PHONE_BY_ID_START',
	SUCCESS: 'FETCH_PHONE_BY_ID_SUCCESS',
	FAILURE: 'FETCH_PHONE_BY_ID_FAILURE'
};

export const basket = {
	ADD: 'app/basket/add',
	REMOVE: 'app/basket/remove',
	CLEAN: 'app/basket/clean'
};

export const search = {
	PHONE: 'app/search/phone'
};

export const categories = {
	START: 'app/categories/start',
	SUCCESS: 'app/categories/success',
	FAILURE: 'app/categories/failure'
};
