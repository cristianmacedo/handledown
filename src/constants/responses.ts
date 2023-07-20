export const successResponseDefault = {
  code: "200",
  content: null,
};

export const successResponseResourceCreated = {
  code: "201",
  content: '{ id: "6400d3ccacf732fb0dcea7e0" }',
};

export const successResponseResourceUpdated = {
  code: "200",
  content: "",
};

// Error

export const errorResponseEmailOrPasswordWrong = {
  code: "401",
  reason: "O email ou senha estão errados",
  content: "{ error: 'email-or-password-wrong' }",
};

export const errorResponseEmailAlreadyRegistered = {
  code: "409",
  reason: "O endereço de e-mail especificado já está cadastrado",
  content: "{ error: 'email-already-registered' }",
};

export const errorResponseInvalidFieldFormat = {
  code: "403",
  reason: "Os dados do campo não estão seguindo as regras especificadas",
  content: "{ error: 'invalid-{field-name}-format' }",
};

export const errorResponseMissingAuthorization = {
  code: "401",
  reason:
    "O token de autorização JWT não foi enviado no header 'Authorization'",
  content: '{ error: "auth-missing" }',
};

export const errorResponseInvalidAuthorization = {
  code: "401",
  reason:
    "O token de autorização JWT enviado no header 'Authorization' é inválido ou expirou",
  content: '{ error: "auth-invalid" }',
};

export const errorResponseResourceNotFound = {
  code: "404",
  reason: "O recurso solicitado não foi encontrado",
  content: '{ error: "resource-not-found" }',
};

export const errorResponseUserNotFound = {
  code: "404",
  reason: "Usuário especificado não encontrado",
  content: '{ error: "user-not-found" }',
};

export const errorResponseResourceForbidden = {
  code: "403",
  reason: "O usuário autenticado não tem acesso a esse recurso",
  content: '{ error: "resource-forbidden" }',
};

export const errorResponseSalesChannelRegistrationsNotFound = {
  code: "404",
  reason:
    "CNPJ/CPF não coincidiu com nenhum dos Canais de Venda. O índice em colchetes [n], indica a posição do item com erro.",
  content: "{ error: 'cnpj-cpf-not-found[n]' }",
};

export const errorResponseSalesChannelRegistrationNotFound = {
  code: "404",
  reason: "CNPJ/CPF não coincidiu com nenhum dos Canais de Venda.",
  content: "{ error: 'cnpj-cpf-not-found' }",
};
