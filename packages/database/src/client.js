"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prisma = void 0;
var prisma_1 = require("../generated/prisma");
exports.prisma = global.prisma || new prisma_1.PrismaClient();
if (process.env.NODE_ENV !== "production")
    global.prisma = exports.prisma;
