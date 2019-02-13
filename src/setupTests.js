/*
  Fixes axios not be able to send headers
  See: https://stackoverflow.com/questions/42677387/jest-returns-network-error-when-doing-an-authenticated-request-with-axios#answer-43020260
*/
global.XMLHttpRequest = undefined
