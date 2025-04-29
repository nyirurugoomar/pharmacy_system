"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StockKeeperModule = void 0;
const common_1 = require("@nestjs/common");
const stock_keeper_service_1 = require("./stock-keeper.service");
const stock_keeper_controller_1 = require("./stock-keeper.controller");
let StockKeeperModule = class StockKeeperModule {
};
exports.StockKeeperModule = StockKeeperModule;
exports.StockKeeperModule = StockKeeperModule = __decorate([
    (0, common_1.Module)({
        controllers: [stock_keeper_controller_1.StockKeeperController],
        providers: [stock_keeper_service_1.StockKeeperService],
    })
], StockKeeperModule);
//# sourceMappingURL=stock-keeper.module.js.map