# アプリを動かす方法
## postgresのDBを作成する
このアプリはPostgreSQLを使用します。

データベース`diary`を新規作成しましょう。
```sql
create database diary;
```

## バックエンドを起動する
```
cd server
./gradlew bootrun
```
[REST APIに関しての詳細はこちら](./backend/README.md)

## フロントエンドを起動する
```
cd web
npm start
```
