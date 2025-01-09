"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RequestLoggerMiddleware = void 0;
const common_1 = require("@nestjs/common");
class RequestLoggerMiddleware {
    logger = new common_1.Logger('request-logger');
    use(req, res, next) {
        res.on('close', () => {
            this.logger.log(`${req.method} ${req.originalUrl} ${req.statusCode}`);
        });
        next();
    }
}
exports.RequestLoggerMiddleware = RequestLoggerMiddleware;
//# sourceMappingURL=request-logger-middleware.js.map