"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const workshop_service_1 = require("../services/workshop.service");
const getWorkshop = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = yield (0, workshop_service_1.getWorkshopService)();
        res.status(200).json({
            success: true,
            data: workshop,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in getting workshops",
        });
    }
});
const addWorkshop = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const workshop = req.body;
        const result = yield (0, workshop_service_1.addWorkshopService)(workshop);
        res.status(200).json({
            success: true,
            data: result,
        });
    }
    catch (err) {
        res.status(400).json({
            success: false,
            err: err.message,
            message: "Error in Adding new workshop",
        });
    }
});
exports.default = { getWorkshop, addWorkshop };
