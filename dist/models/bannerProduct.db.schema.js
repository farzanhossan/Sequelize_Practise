"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
/* eslint-disable @typescript-eslint/camelcase */
const Sequelize = __importStar(require("sequelize"));
const connection_1 = __importDefault(require("../database/connection"));
const BannerProduct = connection_1.default.define('banner_products', {
    id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    product_id: {
        type: Sequelize.INTEGER(),
        allowNull: false
        // references: {
        //   model: Product,
        //   key: 'id'
        // }
    },
    created_at: {
        type: Sequelize.DATE
    },
    updated_at: {
        type: Sequelize.DATE
    }
}, {
    timestamps: false
});
const HIDDEN_ATTRIBUTES = ['created_at', 'updated_at'];
BannerProduct.prototype.toJSON = function () {
    const values = Object.assign({}, this.get());
    for (const value of HIDDEN_ATTRIBUTES) {
        delete values[value];
    }
    return values;
};
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// BannerProduct.belongsTo(Product);
exports.default = BannerProduct;
