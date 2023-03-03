import {
  successResponseDefault,
  errorResponseEmailNotFound,
  errorResponseInvalidFieldFormat,
  paramEmail,
  paramPassword,
} from "../../constants/routes";
import { RoutesData } from "../../types/Routes.types";

const routePasswordRecoveryData: RoutesData = {
  title: "Recuperação de Senha",
  routes: [
    {
      title: "Esqueceu a senha",
      description: "Criar e enviar token de recuperação de senha por e-mail",
      path: "/api/password-recovery/forgot-password",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [paramEmail],
      successResponses: [successResponseDefault],
      errorResponses: [errorResponseEmailNotFound],
      notes:
        "The outcome of this route should be an email message with an URL including the Password Recovery Token, which is a JWT token that should be valid for 10 minutes. The token is NOT stored server-side and should contain the encoded email address of the account which the password will be reseted.",
    },
    {
      title: "Redefinição de senha",
      description:
        "Validar token de redefinição de senha e atualizar senha do usuário atrelado como provido",
      path: "/api/password-recovery/reset-password",
      method: "POST",
      headers: [],
      urlParams: [],
      bodyParams: [
        {
          ...paramPassword,
          name: "newPassword",
        },
        {
          name: "passwordResetToken",
          type: "string",
          example: "d9f478221ab718e758a7c9bb603d5yx9",
          rule: "JWT Token with encoded email address of the account to be reseted",
        },
      ],
      successResponses: [successResponseDefault],
      errorResponses: [
        errorResponseInvalidFieldFormat,
        {
          code: "401",
          reason: "Missing password reset token",
          content: "{ error: 'password-reset-token-missing' }",
        },
        {
          code: "401",
          reason: "Provided password reset token is invalid",
          content: "{ error: 'password-reset-token-invalid' }",
        },
      ],
      notes: "Token should be validated and user password updated as provided.",
    },
  ],
};

export default routePasswordRecoveryData;
