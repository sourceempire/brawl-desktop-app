/* eslint-disable @typescript-eslint/no-explicit-any */
/*
 * Fetcher v1.1
 * Updated 4.12.2019
 * - Added do method
 * - Added upload method
 *
 *
 * Fetcher v1.2
 * Updated 9.20.2022
 * - converted to typescript
 * - all methods now use generics
 */

type Response = {
  succeeded?: boolean;
};

function checkStatus<T>(res: globalThis.Response) {
  return new Promise<T>((resolve, reject) => {
    if (res.headers.has('X-XSRF-TOKEN')) {
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      localStorage.setItem('XSRF-TOKEN', res.headers.get('X-XSRF-TOKEN')!);
    }
    res.json().then((body: Response & T) => {
      if (res.ok) {
        resolve(body);
      } else {
        reject({
          status: res.status,
          ...body
        });
      }
    });
  });
}

function addParams(url: string, params?: Record<string, any>) {
  const query = new URLSearchParams();
  for (const key in params) {
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

function headers(options: Record<string, any>) {
  const headers = {
    'Content-Type': 'application/json',
    ...options.headers
  };
  if (localStorage.getItem('XSRF-TOKEN')) {
    headers['X-XSRF-TOKEN'] = localStorage.getItem('XSRF-TOKEN');
  }
  return headers;
}

function addCSRFToken(options: Record<string, any>) {
  const headers = options.headers || {};
  if (localStorage.getItem('XSRF-TOKEN')) {
    headers['X-XSRF-TOKEN'] = localStorage.getItem('XSRF-TOKEN');
  }
  return headers;
}

const Fetcher = {
  do: async function <T>(
    method: string,
    url: string,
    params: Record<string, any>,
    options: Record<string, any> = {}
  ) {
    if (method === 'post') {
      return Fetcher.post<T>(url, params, options);
    } else if (method === 'get') {
      return Fetcher.get<T>(url, params, options);
    } else if (method === 'delete') {
      return Fetcher.delete<T>(url, params, options);
    }
  },
  get: async function <T>(
    url: string,
    params?: Record<string, any>,
    options: Record<string, any> = {}
  ) {
    const res = await fetch(addParams(url, params), {
      ...options,
      method: 'GET',
      credentials: 'include',
      headers: headers(options)
    });

    return await checkStatus<T>(res);
  },

  post: async function <T>(
    url: string,
    body?: Record<string, any>,
    options: Record<string, any> = {}
  ) {
    const res = await fetch(url, {
      ...options,
      method: 'POST',
      credentials: 'include',
      body: JSON.stringify(body),
      headers: headers(options)
    });

    return await checkStatus<T>(res);
  },

  delete: async function <T>(
    url: string,
    params?: Record<string, any>,
    options: Record<string, any> = {}
  ) {
    const res = await fetch(addParams(url, params), {
      ...options,
      method: 'DELETE',
      credentials: 'include',
      headers: headers(options)
    });
    return await checkStatus<T>(res);
  },
  upload: async function <T>(url: string, body: Blob, options = {}) {
    const res = await fetch(url, {
      ...options,
      method: 'POST',
      credentials: 'include',
      body: body, // TODO -> Handle body not being blob
      headers: addCSRFToken(options)
    });
    return await checkStatus<T>(res);
  },
  postBlob: async (url: string, blob: Blob, options = {}) => {
    const formData = new FormData();
    formData.append('blob', blob);
    const res = await fetch(url, {
      ...options,
      method: 'POST',
      credentials: 'include',
      body: formData,
      headers: addCSRFToken(options)
    });
    return checkStatus(res);
  }
};

export default Fetcher;
