"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListefavorisModule = void 0;
const common_1 = require("@nestjs/common");
const listefavoris_controller_1 = require("./listefavoris.controller");
const listefavoris_service_1 = require("./listefavoris.service");
const typeorm_1 = require("@nestjs/typeorm");
const listefavoris_entity_1 = require("./entities/listefavoris.entity");
let ListefavorisModule = class ListefavorisModule {
};
ListefavorisModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([listefavoris_entity_1.ListefavorisEntity])],
        controllers: [listefavoris_controller_1.ListefavorisController],
        providers: [listefavoris_service_1.ListefavorisService],
    })
], ListefavorisModule);
exports.ListefavorisModule = ListefavorisModule;
//# sourceMappingURL=listefavoris.module.js.map