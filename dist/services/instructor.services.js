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
exports.updateInstructorService = exports.addInstructorService = exports.getInstructorByIdService = exports.getInstructorService = void 0;
const instructor_model_1 = require("./../models/instructor.model");
/*
   @service     finding instructors
*/
const getInstructorService = (query) => __awaiter(void 0, void 0, void 0, function* () {
    const instructor = yield instructor_model_1.InstructorModel.find(query);
    return instructor;
});
exports.getInstructorService = getInstructorService;
const getInstructorByIdService = (id) => __awaiter(void 0, void 0, void 0, function* () {
    const instructor = yield instructor_model_1.InstructorModel.findById(id);
    return instructor;
});
exports.getInstructorByIdService = getInstructorByIdService;
/*
   @service     adding instructors
*/
const addInstructorService = (instructors) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield instructor_model_1.InstructorModel.create(instructors);
    return result;
});
exports.addInstructorService = addInstructorService;
/*
   @service     updating instructors
*/
const updateInstructorService = (_id, updatedValue) => __awaiter(void 0, void 0, void 0, function* () {
    const filter = {
        _id,
    };
    const controller = {
        new: true,
    };
    const result = yield instructor_model_1.InstructorModel.findOneAndUpdate(filter, updatedValue, controller);
    return result;
});
exports.updateInstructorService = updateInstructorService;
