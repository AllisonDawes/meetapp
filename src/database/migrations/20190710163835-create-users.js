module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('users', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },

      password_hash: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },

      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('users');
  },
};

/**
 * COMANDOS SEQUELIZE:
 *
 * (instalar o sequelize)
 * yarn add sequelize
 *
 * (instalar a linha de comandos do sequelize como depedência de desenvolvimento)
 * yarn add sequelize-cli -D
 *
 * (criar um arquivo de migration na pasta database/migrations)
 * yarn sequelize migration:create --name=create-users
 *
 * (cria as tabelas na base de dados)
 * yarn sequelize db:migrate
 *
 * (desfaz uma tabela que tenha sido criada por ultimo)
 * yarn sequelize db:migrate:undo
 *
 * (desfaz todas as tabelas criadas na base de dados)
 * yarn sequelize db:migrate:undo:all
 */
