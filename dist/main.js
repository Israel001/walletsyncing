"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
const core_1 = require("@nestjs/core");
const path_1 = require("path");
const app_module_1 = require("./app.module");
const cors_configuration_1 = require("./config/cors-configuration");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule, {
        cors: cors_configuration_1.corsConfiguration,
    });
    app.useGlobalPipes(new common_1.ValidationPipe({ transform: true }));
    app.enableShutdownHooks();
    app.setBaseViewsDir((0, path_1.join)(__dirname, '..', 'views'));
    app.setViewEngine('ejs');
    app.useStaticAssets((0, path_1.join)(__dirname, '..', 'assets'));
    await app.listen(process.env.PORT || 8080, () => {
        new common_1.Logger().log(`API is started on PORT ${process.env.PORT || 8080}...`);
    });
}
bootstrap();
//# sourceMappingURL=main.js.map