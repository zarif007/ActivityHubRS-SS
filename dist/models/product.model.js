"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
const studentSchema = new mongoose_1.default.Schema({
    name: {
        type: String,
        required: [true, "Product name is required"],
        trim: true,
        unique: true,
        maxlength: [100, "Product name cannot exceed 100 characters"],
        minLenght: [3, "Product name must be atleast 3 characters long"]
    },
    description: {
        type: String,
        required: [true, "Product description is required"],
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Product price cannot be negetive"],
    },
    unit: {
        type: String,
        required: true,
        enum: {
            values: ["kg", "l", "pcs"],
            message: "Product unit must be either kg, l or pcs"
        }
    },
    quantity: {
        type: Number,
        required: true,
        min: [0, "Product quantity cannot be negetive"],
        validate: {
            validator: function (value) {
                if (Number.isInteger(value)) {
                    return true;
                }
                else {
                    return false;
                }
            }
        },
        message: "Product quantity must be an integer"
    },
    status: {
        type: String,
        required: true,
        enum: {
            values: ["in-stock", "out-of-stock", "discontinued"],
            message: "Status can't be {VALUE}"
        }
    },
}, {
    timestamps: true
});
productSchema.pre("save", function (next) {
    console.log("Before saving: ");
    if (this.quantity === 0) {
        this.status = "out-of-stock";
    }
    next();
});
productSchema.methods.logger = function () {
    console.log("Product Name: ", this.name, "saved successfully");
};
module.exports = mongoose_1.default.model("Product", productSchema);
