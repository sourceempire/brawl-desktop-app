/*
 * Fetcher v1.1
 * Updated 4.12.2019
 * - Added do method
 * - Added upload method
 */

function checkStatus(res) {
  return new Promise((resolve, reject) => {
    if (res.headers.has('X-XSRF-TOKEN')) {
      localStorage.setItem('XSRF-TOKEN', res.headers.get('X-XSRF-TOKEN'));
    }
    res.json().then((body) => {
      if (res.ok && body.succeeded === true) {
        resolve(body);
      } else {
        reject({
          jsError: new Error(res.statusText),
          status: res.status,
          ...body
        });
      }
    });
  });
}

function addParams(url, params) {
  const query = new URLSearchParams();
  for (var key in params) {
    if (key === 'headers') continue;

    const value = params[key];

    if (Array.isArray(value)) {
      query.append(key, JSON.stringify(value));
    } else if (typeof value === 'object') {
      query.append(key, JSON.stringify(value));
    } else {
      query.append(key, value);
    }
  }
  if (query.toString().length === 0) return url;

  if (url.includes('?')) {
    return url + '&' + query.toString();
  } else {
    return url + '?' + query.toString();
  }
}

function headers(options) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  if (localStorage.getItem('XSRF-TOKEN')) {
    headers['X-XSRF-TOKEN'] = localStorage.getItem('XSRF-TOKEN');
  }
  return headers;
}

function addCSRFToken(options) {
  const headers = options.headers || {};
  if (localStorage.getItem('XSRF-TOKEN')) {
    headers['X-XSRF-TOKEN'] = localStorage.getItem('XSRF-TOKEN');
  }
  return headers;
}

const Fetcher = {
  do: (method, url, params, options = {}) => {
    if (method === 'post') {
      return Fetcher.post(url, params, options);
    } else if (method === 'get') {
      return Fetcher.get(url, params, options);
    } else if (method === 'delete') {
      return Fetcher.delete(url, params, options);
    }
  },
  get: (url, params, options = {}) =>
    fetch(addParams(url, params), {
      ...options,
      method: 'GET',
      credentials: 'include',
      headers: headers(options)
    }).then(checkStatus),

  post: (url, body, options = {}) =>
    fetch(url, {
      ...options,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: headers(options)
    }).then(checkStatus),

  delete: (url, params, options = {}) =>
    fetch(addParams(url, params), {
      ...options,
      method: 'DELETE',
      credentials: 'include',
      headers: headers(options)
    }).then(checkStatus),

  upload: (url, body, options = {}) =>
    fetch(url, {
      ...options,
      method: 'POST',
      credentials: 'include',
      body: body,
      headers: addCSRFToken(options)
    }).then(checkStatus)
};

export default Fetcher;
