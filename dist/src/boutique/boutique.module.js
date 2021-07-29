"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoutiqueModule = void 0;
const common_1 = require("@nestjs/common");
const boutique_controller_1 = require("./boutique.controller");
const boutique_service_1 = require("./boutique.service");
const typeorm_1 = require("@nestjs/typeorm");
const boutique_entity_1 = require("./entities/boutique.entity");
let BoutiqueModule = class BoutiqueModule {
};
BoutiqueModule = __decorate([
    common_1.Module({
        imports: [typeorm_1.TypeOrmModule.forFeature([boutique_entity_1.BoutiqueEntity])],
        controllers: [boutique_controller_1.BoutiqueController],
        providers: [boutique_service_1.BoutiqueService],
    })
], BoutiqueModule);
exports.BoutiqueModule = BoutiqueModule;
//# sourceMappingURL=boutique.module.js.map