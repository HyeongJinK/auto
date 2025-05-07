import Database from "better-sqlite3";
import path from "path";

// 데이터베이스 파일 경로 설정
const dbPath = path.resolve(process.cwd(), "database.sqlite");
const db = new Database(dbPath);

// 테이블 생성 (예: users 테이블)
db.exec(`
  CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    name TEXT NOT NULL,
    email TEXT UNIQUE NOT NULL
  );
`);

export default db;