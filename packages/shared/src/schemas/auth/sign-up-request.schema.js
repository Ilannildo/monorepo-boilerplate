"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.signUpRequestSchema = void 0;
var zod_1 = require("zod");
exports.signUpRequestSchema = zod_1.z.object({
    name: zod_1.z
        .string({ required_error: "O nome é um campo obrigatório" })
        .min(6, "O nome precisa ter no mínimo 6 letras."),
    email: zod_1.z
        .string({ required_error: "O e-mail é um campo obrigatório" })
        .email("Informe um e-mail válido"),
    password: zod_1.z
        .string({ required_error: "A senha é um campo obrigatório" })
        .min(6, "A senha precisa ter no mínimo 6 caracteres")
        .max(32, "A senha precisa ter no máximo 32 caracteres"),
});
