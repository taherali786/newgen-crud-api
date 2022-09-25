"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const app_module_1 = require("./app.module");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    app.setGlobalPrefix('api/v1');
    const PORT = process.env.PORT || 3000;
    console.log(`Server is running on PORT ${PORT}`);
    await app.listen(PORT);
}
bootstrap();
//# sourceMappingURL=main.js.map