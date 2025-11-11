-- CREATE TABLE user_profile(
--   id BIGINT PRIMARY KEY AUTO_INCREMENT,
--   first_name TEXT NOT NULL,
--   last_name TEXT NOT NULL,
--   email TEXT UNIQUE NOT NULL,
--   gender TEXT CHECK(gender IN ('MALE', 'FEMALE')) NOT NULL,
--   create_at TIMESTAMP WITHOUT TIME ZONE NOT NULL
-- );

CREATE TABLE IF NOT EXISTS user_profile(
  id BIGINT AUTO_INCREMENT PRIMARY KEY,
  first_name VARCHAR(50) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  gender VARCHAR(10) CHECK(gender IN ('MALE', 'FEMALE')) NOT NULL,
  create_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS youtube_account (
  user_profile_id BIGINT AUTO_INCREMENT PRIMARY KEY REFERENCES user_profile(id),
  create_at TIMESTAMP NOT NULL
);

CREATE TABLE IF NOT EXISTS channel_subscriber (
  youtube_account_id BIGINT REFERENCES youtube_account(user_profile_id),
  youtube_channel_id BIGINT REFERENCES youtube_account(user_profile_id),
  create_at TIMESTAMP NOT NULL,
  PRIMARY KEY (youtube_account_id, youtube_channel_id),
);