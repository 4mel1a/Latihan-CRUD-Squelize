'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class siswa extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  siswa.init({
    id_siswa: {
      type : DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    nis: DataTypes.INTEGER,
    nama_siswa: DataTypes.STRING,
    kelas: DataTypes.STRING,
    jurusan: DataTypes.STRING,
    sekolah: DataTypes.STRING,
    alamat: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'siswa',
    tableName: 'siswa'
  });
  return siswa;
};