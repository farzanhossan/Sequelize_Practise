/* eslint-disable @typescript-eslint/camelcase */
import * as Sequelize from 'sequelize';
import sequelize from '../database/connection'
// import ContentType from '../contentType/contentType.db.schema';
// import ContentCategory from '../contentCategory/contentCategory.db.schema';
// import MaturityLevel from '../maturityLevel/maturityLevel.db.schema';
// import Genre from '../genre/genere.db.schema';
// import Category from '../category/category.db.schema';
// import CategoryProduct from '../categoryProduct/categoryProduct.db.schema';

const Product = sequelize.define(
  'products',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true
    },
    content_type_id: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    content_category_id: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    maturity_level_id: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    distributor: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    name: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    director: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    producer: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    artists: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    script_writer: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    synopsis: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    album: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    song_title: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    composer: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    lyricist: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    cast: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    description: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    image: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    thumb_path: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    slug: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    duration: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    intro_duration: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    language_id: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    closed_caption: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    caption_language_id: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    file_extension: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    content_path: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    trailer_link: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    episode_number: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    season_number: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    content_playback_link: {
      type: Sequelize.STRING(),
      allowNull: false
    },
    content_file_size: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    free_or_premium: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    status: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    avg_rating: {
      type: Sequelize.DOUBLE(),
      allowNull: false
    },
    created_by: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    updated_by: {
      type: Sequelize.INTEGER(),
      allowNull: false
    },
    created_at: {
      type: Sequelize.DATE
    },
    updated_at: {
      type: Sequelize.DATE
    },
    deleted_at: {
      type: Sequelize.DATE
    }
  },
  {
    timestamps: false
  }
);

const HIDDEN_ATTRIBUTES = [
  'created_by',
  'updated_by',
  'created_at',
  'updated_at',
  'deleted_at'
];

Product.prototype.toJSON = function(): string {
  const values = Object.assign({}, this.get());

  for (const value of HIDDEN_ATTRIBUTES) {
    delete values[value];
  }
  return values;
};

// Product.belongsTo(ContentType, {foreignKey: 'content_type_id'});
// Product.belongsTo(ContentCategory, {foreignKey: 'content_category_id'});
// Product.belongsTo(MaturityLevel, {foreignKey: 'maturity_level_id'});

export default Product;
