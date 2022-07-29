const User = require('./User');
const Todo = require('./Todo');

Todo.belongsTo(User, {
    foreignKey: 'userId',
});

User.hasMany(Todo, {
    foreignKey: 'userId',
    onDelete: 'CASCADE',
});


module.exports = {
    User,
    Todo,
};