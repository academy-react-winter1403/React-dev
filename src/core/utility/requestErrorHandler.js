export const requestErrorHandler = (statusCode, statusMessage) => {
  if (statusCode === 401) {
    // alert("Error 401");
  }
  if (statusCode >= 404 && statusCode < 500) {
    alert("Client Error:", statusMessage);
  }
};
