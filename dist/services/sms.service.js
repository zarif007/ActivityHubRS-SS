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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendSms = void 0;
const axios_1 = __importDefault(require("axios"));
const sendSms = (to, message) => __awaiter(void 0, void 0, void 0, function* () {
    if (!to.startsWith('+88')) {
        to = `+88${to}`;
    }
    const token = process.env.SMS_TOKEN;
    const smsApiUrl = process.env.SMS_API;
    const smsParams = new URLSearchParams();
    smsParams.append('token', token);
    smsParams.append('to', to);
    smsParams.append('message', message);
    try {
        const response = yield axios_1.default.post(smsApiUrl, smsParams);
        return response.data;
    }
    catch (error) {
        return error;
    }
});
exports.sendSms = sendSms;
