module.exports = (sequelize, DataTypes) => {
    const Barang = sequelize.define(
        "Barang",
        {
            id:{
                type:DataTypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            part_number: {
                type: DataTypes.STRING
              },
              description: {
                type: DataTypes.STRING
              },
              alias: {
                type: DataTypes.STRING
              },
              link: {
                type: DataTypes.STRING
              },
              images: {
                type: DataTypes.JSON
              },
              createdAt:{
                type: DataTypes.DATE,
                allowNull: false,
              },
              updatedAt:{
                type: DataTypes.DATE,
                allowNull: false,
              }
        },{
            tableName: "barang"
          }
    )
    return Barang
}