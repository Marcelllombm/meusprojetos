module.exports = (sequelize, DataTypes) => {
  const guiaPesquisa = sequelize.define('guia_pesquisa', {
    id: {
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER,
    },
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    created_at: { type: DataTypes.DATE, defaultValue: Date.now() },
    updated_at: { type: DataTypes.DATE, defaultValue: Date.now() },
    }, {
    timestamps: false,
    tableName: 'guia_pesquisa',
  });
  return guiaPesquisa;
};
