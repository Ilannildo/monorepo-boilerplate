"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiEnvSchema = void 0;
var zod_1 = require("zod");
exports.apiEnvSchema = zod_1.z.object({
    NODE_ENV: zod_1.z.enum(["development", "test", "production"], {
        errorMap: function () { return ({
            message: 'NODE_ENV deve ser "development", "test" ou "production".',
        }); },
    }),
    DATABASE_URL: zod_1.z
        .string({
        message: "DATABASE_URL é obrigatória",
    })
        .nonempty(),
    APP_VERSION: zod_1.z
        .string()
        .nonempty({ message: "APP_VERSION não pode estar vazio." }),
    APP_PORT: zod_1.z.coerce.number().int().positive({ message: "APP_PORT inválido." }),
    REDIS_PORT: zod_1.z.coerce
        .number()
        .int()
        .positive({ message: "REDIS_PORT inválido." }),
    REDIS_PASSWORD: zod_1.z
        .string({
        message: "REDIS_PASSWORD é obrigatória",
    })
        .nonempty(),
    APP_NAME: zod_1.z.string().nonempty({ message: "APP_NAME não pode estar vazio." }),
});
