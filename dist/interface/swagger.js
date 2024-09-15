import swaggerJSDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
const options = {
    definition: {
        openapi: "3.0.0",
        info: {
            title: "Clean Architecture API",
            version: "1.0.0",
        },
    },
    apis: ["./src/interface/routes/*.ts"],
};
const swaggerSpec = swaggerJSDoc(options);
function setupSwagger(app) {
    app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}
export { setupSwagger };
