const User = require('./User');
const Todo = require('./Todo');

Todo.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Todo, {
    foreignKey: 'id',
    onDelete: 'CASCADE',
});


module.exports = {
    User,
    Todo,
};