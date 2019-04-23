create extension if not exists pgcrypto;
create extension if not exists pg_stat_statements;

create table if not exists users
(
    user_handle uuid primary key default gen_random_uuid(),
    username text not null,
    first_name text not null,
  	middle_name text,
  	last_name text not null,
  	suffix text,
    email text not null,
    joined_date timestamp
);
grant select, insert, update, delete on table users to project_app;
grant select on table users to project_read;
