export const paramSalesChannel = {
  name: "salesChannel",
  type: "string (MongoDB ObjectID)",
  example: "63165cf2d5aedac59d2a123c",
  rule: "Filtrar apenas itens pertencentes ao canal de vendas especificado",
};

export const paramStatus = {
  name: "status",
  type: "string",
  example: "finished",
  rule: "Filtrar apenas itens com o status especificado",
};

export const paramProduct = {
  name: "product",
  type: "string (MongoDB ObjectID)",
  example: "63165cf2d5aedac59d2a1237",
  rule: "Filtrar apenas itens que contenham o produto especificado",
};

export const paramSearch = {
  name: "search",
  type: "string",
  example: "John",
  rule: "Filtrar apenas itens que contenham parte da pesquisa no nome",
};

export const paramEmail = {
  name: "email",
  type: "string",
  example: "john.doe@stoller.com",
  rule: "Regex: <code>^[w-.]+@([w-]+.)+[w-]{2,4}$</code>",
};

export const paramPassword = {
  name: "password",
  type: "string",
  example: "St0ller@123",
  rule: "8 digitos, 1 letra maiúscula, 1 número, 1 caractére especial",
};

export const paramPhone = {
  name: "phone",
  example: "5596967271812",
  type: "string",
  rule: "Regex: <code>^55[1-9]{2}(?:[2-8]|9[1-9])[0-9]{3}[0-9]{4}$</code>",
};

export const paramLimit = {
  name: "limit",
  type: "number",
  example: "10",
  rule: "Tamanho máximo da lista a ser retornada",
};

export const paramOffset = {
  name: "offset",
  type: "number",
  example: "15",
  rule: "Deslocamento a ser feito na paginação",
};

export const paramAuthorization = {
  name: "Authorization",
  type: "string",
  example: "Bearer eyJhbGciOiJIUzI1N.eyJzdWIiOiIxMjM0NTY3O.SflKxwRJSMeKKF2QT",
};

export const paramSalesChannelRegistrations = {
  name: "cnpjsCpfs",
  example: "['98313040041', '34012072000170', '39039711000105']",
  type: "string[]",
  rule: "Lista de CNPJs e CPFs válidos e que coincidem com cadastros de Canais de Vendas",
};

export const paramSalesChannelRegistration = {
  name: "cnpjCpf",
  example: "34012072000170",
  type: "string",
  rule: "CNPJ ou CPF válido que coincide com um cadastro de Canal de Vendas",
};
