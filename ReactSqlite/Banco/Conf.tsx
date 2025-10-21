import * as SQLite from 'expo-sqlite';
// criar um banco de dados
async function openDatabase() {
  try {
    const db = await SQLite.openDatabaseAsync('etec.db');
    console.log('Banco de dados aberto com sucesso!');
    return db;
  } catch (error) {
    console.error('Erro ao abrir o banco de dados:' + error);
  }
}
// criar a tabela
async function createTable(db: SQLite.SQLiteDatabase) {
  try {
    await db.execAsync(
      `PRAGMA journal_mode = WAL;
          CREATE TABLE IF NOT EXISTS USUARIO (
            ID_US INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
            NOME_US VARCHAR(100),
            EMAIL_US VARCHAR(100))
            `
    );
    console.log('Tabela criada com sucesso!');
  } catch (error) {
    console.error('Erro ao criar a tabela:' + error);
  }
}



// exportar
export { openDatabase, createTable };