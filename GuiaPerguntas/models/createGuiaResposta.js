
module.exports = (sequelize, DataTypes) => {
  const guiaResposta = sequelize.define('guia_resposta', {
    id: {
      autoIncrement:true,
      primaryKey:true,
      type: DataTypes.INTEGER,
    },
    corpo: DataTypes.TEXT,
    perguntaId: DataTypes.INTEGER,
    created_at: { type: DataTypes.DATE, defaultValue: Date.now() },
    updated_at: { type: DataTypes.DATE, defaultValue: Date.now() },
  }, {
    timestamps: false,
    tableName: 'guia_resposta',
  });

return guiaResposta;
};