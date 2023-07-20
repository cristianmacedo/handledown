import { paramEmail, paramPassword } from "../../constants/params";
import {
  successResponseDefault,
  errorResponseInvalidFieldFormat,
} from "../../constants/responses";
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
      errorResponses: [],
      notes:
        "O resultado dessa rota deve ser uma mensagem de e-mail com uma URL incluíndo o token de redefinição de senha, que deve ser válido por 10 minutos. Esse token não deve ser armazenado no servidor e deve conter o endereço de e-mail do usuário que solicitou a redefinição de senha.",
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
          rule: "Token JWT com o endereço de e-mail do usuário que solicitou a redefinição de senha.",
        },
      ],
      successResponses: [successResponseDefault],
      errorResponses: [
        errorResponseInvalidFieldFormat,
        {
          code: "401",
          reason: "Token de redefinição de senha ausente",
          content: "{ error: 'password-reset-token-missing' }",
        },
        {
          code: "401",
          reason: "Token de redefinição de senha inválido",
          content: "{ error: 'password-reset-token-invalid' }",
        },
      ],
      notes:
        "O token deve ser válidado e a senha do usuário atualizada de acordo.",
    },
  ],
};

export default routePasswordRecoveryData;
