import { ocUser } from "../../constants/entities";
import {
  paramSalesChannelRegistrations,
  paramStatus,
} from "../../constants/params";
import {
  paramAuthorization,
  paramEmail,
  paramLimit,
  paramOffset,
  paramPassword,
  paramPhone,
  paramSearch,
} from "../../constants/params";
import {
  errorResponseEmailAlreadyRegistered,
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
  errorResponseSalesChannelRegistrationsNotFound,
  successResponseResourceCreated,
  successResponseResourceUpdated,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const userParamName = {
  name: "name",
  example: "John Doe",
  type: "string",
  rule: "Apenas letras",
};

const userParamMobilePhone = {
  ...paramPhone,
  name: "mobilePhone",
};

const userParamCommercialPhone = {
  ...paramPhone,
  name: "commercialPhone",
};

const usersData: RoutesData = {
  title: "Users",
  routes: [
    {
      title: "Criar usuário",
      description: "Criar novo usuário e suas permissões",
      path: "/api/users",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [
        userParamName,
        paramEmail,
        paramPassword,
        userParamMobilePhone,
        userParamCommercialPhone,
        paramSalesChannelRegistrations,
      ],
      errorResponses: [
        errorResponseEmailAlreadyRegistered,
        errorResponseInvalidFieldFormat,
        errorResponseSalesChannelRegistrationsNotFound,
      ],
      successResponses: [successResponseResourceCreated],
      notes:
        "Usuários devem ser criados com o status 'pending' até que o e-mail de registro seja verificado.",
    },
    {
      title: "Consultar usuários",
      description: "Consultar todos os usuários",
      path: "/api/users",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [
        paramLimit,
        paramOffset,
        {
          name: "type",
          example: "stoller-admin",
          type: "string (UserType)",
          rule: "Filtrar apenas usuários que sejam do tipo especificado",
        },
        paramSearch,
        {
          ...paramStatus,
          example: "pending",
          type: "string (UserStatus)",
        },
      ],
      bodyParams: [],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
      ],
      successResponses: [
        {
          code: "200",
          content: JSON.stringify({
            users: "User[]",
            limit: 0,
            offset: 0,
            total: 50,
          }),
        },
      ],
      notes: "",
    },
    {
      title: "Consultar usuário",
      description: "Consultar um usuário específico",
      path: "/api/users/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
      ],
      successResponses: [
        {
          code: "200",
          content: JSON.stringify({
            user: "User",
            salesChannels: ["SalesChannel", "SalesChannel"],
          }),
        },
      ],
      notes:
        "Sempre retornar a lista de canais de venda que o usuário consultado tem permissão",
    },
    {
      title: "Atualizar usuário",
      description: "Atualizar os dados de um usuário específico",
      path: "/api/users/:id",
      method: "PUT",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [
        {
          name: "status",
          example: "blocked",
          type: "string (UserType)",
          rule: "Apenas usuários do tipo `stoller-admin` ou `sales-channel-admin` admin podem atualizar status de usuários.",
        },
        userParamName,
        {
          ...paramPassword,
          name: "newPassword",
          rule: `${paramPassword.rule}, diferente da senha atual`,
        },
        {
          ...paramPassword,
          name: "currentPassword",
          rule: "Deve ser igual a senha cadastrada atualmente",
        },
        userParamMobilePhone,
        userParamCommercialPhone,
        {
          name: "notifications",
          example: JSON.stringify(ocUser.notifications),
          type: "{ deliveries: UserNotification, wallets: UserNotification, orders: UserNotification }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
        errorResponseInvalidFieldFormat,
        {
          code: "403",
          content: "{ error: 'password-wrong' }",
          reason:
            "`currentPassword` é diferente da senha cadastrada atualmente",
        },
        {
          code: "403",
          content: "{ error: 'password-same' }",
          reason: "`newPassword` é igual a senha cadastrada atualmente",
        },
      ],
      notes:
        "Apenas usuários do tipo `stoller-admin` ou `sales-channel-admin` admin podem atualizar status de usuários.",
      successResponses: [successResponseResourceUpdated],
    },
  ],
};

export default usersData;
