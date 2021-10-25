export const isActiveUrl = (url) => {
  const isActive = window.location.href?.split('/').at(-1) === url.replace('/', '');
  return isActive;
}