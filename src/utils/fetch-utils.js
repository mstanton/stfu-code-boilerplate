import {queryCache} from 'react-query'
const localStorageKey = 'TOKEN'

function client(endpoint, {body, ...customConfig} = {}) {
  const token = window.localStorage.getItem(localStorageKey)
  const headers = {'content-type': 'application/json'}
  
  if (token) {
    headers.Authorization = `Bearer ${token}`
  }
  
  const config = {
    method: body ? 'POST' : 'GET',
    ...customConfig,
    headers: {
      ...headers,
      ...customConfig.headers,
    },
  }
  
  if (body) {
    config.body = JSON.stringify(body)
  }

  return window
    .fetch(`${process.env.REACT_APP_API_URL}/${endpoint}`, config)
    .then(async response => {
      if (response.status === 401) {
        logout()
        // refresh page
        window.location.assign(window.location)
        return
      }
      const data = await response.json()
      if (response.ok) {
        return data
      } else {
        return Promise.reject(data)
      }
    })
}

function logout() {
  queryCache.clear()
  window.localStorage.removeItem(localStorageKey)
}

export {client, localStorageKey, logout}