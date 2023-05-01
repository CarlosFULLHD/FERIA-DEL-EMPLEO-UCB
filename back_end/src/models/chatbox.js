// TEST MODEL 
module.exports = (sequialize, DataTypes) =>
    sequialize.define('chatbox', {
        name: DataTypes.STRING,
        description: DataTypes.STRING,
        link: DataTypes.STRING,
    });