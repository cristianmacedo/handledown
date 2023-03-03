export const successResponseDefault = {
  code: "200",
  content: null,
};

export const errorResponseEmailNotFound = {
  code: "401",
  reason: "Provided email was not found",
  content: "{ error: 'email-not-found' }",
};

export const errorResponseInvalidFieldFormat = {
  code: "401",
  reason: "Field is not following the specified rules",
  content: "{ error : 'invalid-{field-name}-format' }",
};

export const errorResponseMissingAuthorization = {
  code: "401",
  reason:
    "Header AuthorizationAuthorization Header JWT Token was not sent along with the request",
  content: '{ type : "auth-missing" }',
};

export const errorResponseInvalidAuthorization = {
  code: "401",
  reason: "Authorization Header JWT Token is invalid",
  content: '{ type : "auth-invalid" }',
};

export const paramEmail = {
  name: "email",
  type: "string",
  example: "john.doe@stoller.com",
};

export const paramPassword = {
  name: "password",
  type: "string",
  example: "St0ller@123",
  rule: "8 digits, 1 uppercase letter, 1 number, 1 special character",
};

export const paramAuthorization = {
  name: "Authorization",
  type: "string",
  example: "Bearer eyJhbGciOiJIUzI1N.eyJzdWIiOiIxMjM0NTY3O.SflKxwRJSMeKKF2QT",
};
