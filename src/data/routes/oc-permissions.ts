import {
  paramAuthorization,
  paramLimit,
  paramOffset,
  paramSalesChannelRegistration,
  paramSalesChannelRegistrations,
  paramSearch,
} from "../../constants/params";
import {
  errorResponseInvalidAuthorization,
  errorResponseInvalidFieldFormat,
  errorResponseMissingAuthorization,
  errorResponseResourceForbidden,
  errorResponseResourceNotFound,
  errorResponseSalesChannelRegistrationsNotFound,
  errorResponseSalesChannelRegistrationNotFound,
  errorResponseUserNotFound,
  successResponseResourceCreated,
  successResponseResourceUpdated,
} from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const permissionCreationDisclaimer =
  "Apenas usuários do tipo `stoller-admin` ou `sales-channel-admin` podem criar permissões para outros usuários que não o seu próprio.";

const permissionUpdateDisclaimer =
  "Apenas usuários do tipo `stoller-admin` ou `sales-channel-admin` podem atualizar status de permissões";

export const permissionsData: RoutesData = {
  title: "Permissões",
  routes: [
    {
      title: "Criar permissão",
      description: "Criar nova relação de permissão para o usuário logado",
      path: "/api/permissions",
      method: "POST",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [
        {
          name: "user",
          example: "64755f22154517e2f14afdbf",
          type: "string (ObjectID)",
          rule: `ID do usuário a qual o canal de vendas vai ser relacionado. ${permissionCreationDisclaimer}`,
        },
        paramSalesChannelRegistration,
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseUserNotFound,
        errorResponseSalesChannelRegistrationNotFound,
      ],
      successResponses: [successResponseResourceCreated],
      notes: permissionCreationDisclaimer,
    },
    {
      title: "Criar permissões",
      description: "Criar nova relação de permissão para o usuário logado",
      path: "/api/permissions/many",
      method: "POST",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [
        {
          name: "user",
          example: "64755f22154517e2f14afdbf",
          type: "string (ObjectID)",
          rule: `ID do usuário a qual os canais de vendas vão ser relacionados. ${permissionCreationDisclaimer}`,
        },
        {
          ...paramSalesChannelRegistrations,
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseUserNotFound,
        errorResponseSalesChannelRegistrationsNotFound,
      ],
      successResponses: [successResponseResourceCreated],
      notes:
        "Apenas usuários do tipo `stoller-admin` ou `sales-channel-admin` admin podem criar permissões para outros usuários que não o seu próprio.",
    },
    {
      title: "Consultar permissões",
      description: "Consultar todas as permissões cadastradas",
      path: "/api/permissions",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [
        paramLimit,
        paramOffset,
        {
          ...paramSearch,
          rule: "Filtrar permissões que contenham parte da pesquisa em `user.name`, `salesChannel.fantasyName` ou `salesChannel.cnpj`",
        },
        {
          name: "status",
          example: "pending",
          type: "string (PermissionStatus)",
          rule: "Filtrar permissões que possuam o status especificado",
        },
      ],
      successResponses: [
        {
          code: "200",
          content:
            "{ permissions: [Permission, Permission], limit: 10, offset: 15, total: 6000 }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
      ],
      notes: "",
    },
    {
      title: "Consultar permissão",
      description: "Consultar permissão específica",
      path: "/api/permissions/:id",
      method: "GET",
      headers: [paramAuthorization],
      urlParams: [],
      bodyParams: [],
      successResponses: [
        {
          code: "200",
          content: "{ permission: Permission }",
        },
      ],
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
      ],
      notes: "",
    },
    {
      title: "Atualizar permissão",
      description: "Atualizar permissão específica",
      path: "/api/permissions/:id",
      headers: [paramAuthorization],
      method: "PUT",
      urlParams: [],
      bodyParams: [
        {
          name: "status",
          example: "active",
          type: "string (PermissionStatus)",
          rule: permissionUpdateDisclaimer,
        },
      ],
      notes: permissionUpdateDisclaimer,
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
        errorResponseInvalidFieldFormat,
      ],
      successResponses: [successResponseResourceUpdated],
    },
    {
      title: "Atualizar permissões",
      description: "Atualizar múltiplas permissões",
      path: "/api/permissions/many",
      headers: [paramAuthorization],
      method: "PUT",
      urlParams: [
        {
          name: "ids",
          example: "64756b9a2128ff549ea6f25f,64756ba045f91270f3522818",
          type: "string[] (ObjectID[])",
        },
      ],
      bodyParams: [
        {
          name: "status",
          example: "inactive",
          type: "string (PermissionStatus)",
          rule: permissionUpdateDisclaimer,
        },
      ],
      notes: permissionUpdateDisclaimer,
      errorResponses: [
        errorResponseMissingAuthorization,
        errorResponseInvalidAuthorization,
        errorResponseResourceForbidden,
        errorResponseResourceNotFound,
        errorResponseInvalidFieldFormat,
      ],
      successResponses: [successResponseResourceUpdated],
    },
  ],
};

export default permissionsData;
