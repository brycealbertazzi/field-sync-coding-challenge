CREATE DATABASE FieldSyncDB
    WITH
    OWNER = postgres
    TEMPLATE = template0
    ENCODING = 'UTF8'
    LOCALE_PROVIDER = 'libc'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1
    IS_TEMPLATE = False;

-- Connect to the database
\c FieldSyncDB;

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS users (
    id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
	user_id INTEGER NOT NULL,
    name VARCHAR NOT NULL,
	company VARCHAR NOT NULL,
    email VARCHAR NOT NULL,
	phone VARCHAR NOT NULL
);
