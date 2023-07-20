import { paramEmail } from "../../constants/params";
import { successResponseDefault } from "../../constants/responses";
import { RoutesData } from "../../types/Routes.types";

const routePasswordRecoveryData: RoutesData = {
  title: "Verificação de E-mail",
  routes: [
    {
      title: "Enviar E-mail",
      description:
        "Enviar token de verificação de endereço de e-mail por e-mail",
      path: "/api/email-verification/send-email",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [paramEmail],
      successResponses: [successResponseDefault],
      errorResponses: [],
      notes:
        "Esta rota deve gerar um token JWT contendo o e-mail do usuário, e enviá-lo por e-mail, junto a uma URL pré-definida, que permita uma validação posterior do token pela API",
    },
    {
      title: "Verificar E-mail",
      description:
        "Validar token de verificação de e-mail e atualizar o status da conta",
      path: "/api/email-verification/verify-email",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [
        {
          name: "emailVerificationToken",
          type: "string",
          example: "d9f478221ab718e758a7c9bb603d5yx9",
          rule: "Token JWT com o email do usuário verificado a ser atualizado",
        },
      ],
      successResponses: [successResponseDefault],
      errorResponses: [
        {
          code: "401",
          reason: "Token de verificação ausente",
          content: "{ error: 'email-verification-token-missing' }",
        },
        {
          code: "401",
          reason: "Token de verificação inválido",
          content: "{ error: 'email-verification-token-invalid' }",
        },
      ],
      notes: "Se o token for válido o status do usuário deve ser atualizado",
    },
  ],
};

export default routePasswordRecoveryData;
