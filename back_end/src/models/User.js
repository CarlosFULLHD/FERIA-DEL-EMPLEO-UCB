// TEST MODEL 
module.exports = (sequialize, DataTypes) =>
    sequialize.define('User', {
        email: {
            type: DataTypes.STRING,
            unique: true
        },
        password: DataTypes.STRING
    });
    