const tokenName = 'token'

export function setToken(token) {
  console.log(token)
  return window.localStorage.setItem(tokenName, token)
}

export function getToken() {
  console.log(tokenName)
  return window.localStorage.getItem(tokenName)
}

export function removeToken() {
  return window.localStorage.removeItem(tokenName)
}


function getPayLoad() {
  const token = getToken()
  console.log(token)
  if (!token) {
    return false
  }
  const parts = token.split('.')
  if (parts.length < 3) {
    removeToken()
    return false
  }
  return JSON.parse(atob(parts[1]))
}

export function isAuthenticated() {
  const payload = getPayLoad()
  console.log(payload)
  if (!payload) return false
  const now = Math.round(Date.now() / 1000)
  return now < payload.exp
}

export function isOwner(id) {
  const payload = getPayLoad()
  if (!payload) {
    return false
  }
  // if (!isAuthenticated()) {
  //   return false
  // }
  return id === payload.sub
}

