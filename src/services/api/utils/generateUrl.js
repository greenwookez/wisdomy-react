const generateUrl = (path, params) => {
  const queryParams = Object.entries(params).reduce((string, [key, value]) => {
    string.concat(`${key}=${value}&`)
  }, '')

  return `${path}?${queryParams}`;
}

export default generateUrl;