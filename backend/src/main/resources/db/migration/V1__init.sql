CREATE TABLE api_user
(
    id       BIGSERIAL PRIMARY KEY,
    name     TEXT NOT NULL,
    password TEXT NOT NULL
);

CREATE TABLE diary
(
    id      BIGSERIAL PRIMARY KEY,
    user_id BIGINT  NOT NULL REFERENCES api_user (id) ON DELETE CASCADE,
    title    TEXT    NOT NULL,
    body    TEXT
);