export const AuthToken = (() => {
  function getNewToken(): string {
    let randomToken = Math.random()+'';
    return randomToken.slice(2)
  }

  function removeToken(): void {
    window.sessionStorage.removeItem('token');
  }

  function setToken(): void {
    const token = getNewToken();
    window.sessionStorage.setItem('token', token);
  }

  function getToken(): string {
    return window.sessionStorage.getItem('token');
  }

  return {
    setToken,
    getToken,
    removeToken,
  }
})();