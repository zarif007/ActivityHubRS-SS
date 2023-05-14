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
exports.addInstructorService = exports.getInstructorByIdService = exports.getInstructorService = void 0;
const instructor_model_1 = require("./../models/instructor.model");
const getInstructorService = () => __awaiter(void 0, void 0, void 0, function* () {
    const instructor = yield instructor_model_1.InstructorModel.find({});
    return instructor;
});
exports.getInstructorService = getInstructorService;
const getInstructorByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const instructor = yield instructor_model_1.InstructorModel.find({ _id: id });
    return instructor;
});
exports.getInstructorByIdService = getInstructorByIdService;
const addInstructorService = (instructor) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instructor_model_1.InstructorModel.insertMany(instructor);
    return result;
});
exports.addInstructorService = addInstructorService;
