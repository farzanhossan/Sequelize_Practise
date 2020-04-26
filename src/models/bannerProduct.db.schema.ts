/* eslint-disable @typescript-eslint/camelcase */
import * as Sequelize from 'sequelize';
import sequelize from '../database/connection'

const BannerProduct = sequelize.define(
  'banner_products',
  {
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
  },
  {
    timestamps: false
  }
);
const HIDDEN_ATTRIBUTES = ['created_at', 'updated_at'];

BannerProduct.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }
  return values;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
// BannerProduct.belongsTo(Product);

export default BannerProduct;
