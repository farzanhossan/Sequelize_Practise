"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const port = process.env.PORT || 3006;
new app_1.default().start(port)
    .then((port) => {
    // TimeSchedule();
    console.log(`Server running on port ${port}`);
    console.time('Database Connection Time');
})
    .catch(error => {
    console.log(error);
    process.exit(1);
});
