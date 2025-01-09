"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SmtpConfiguration = void 0;
const config_1 = require("@nestjs/config");
exports.SmtpConfiguration = (0, config_1.registerAs)('smtpConfig', () => ({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    username: process.env.SMTP_USERNAME,
    password: process.env.SMTP_PASSWORD,
}));
//# sourceMappingURL=configuration.js.map