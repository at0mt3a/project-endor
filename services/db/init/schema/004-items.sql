create extension if not exists pgcrypto;
create extension if not exists pg_stat_statements;

create table if not exists items
(
    item_id uuid primary key default gen_random_uuid(),
    item_name text not null,
  	price integer not null,
  	category text not null,
    seller text not null,
    release_date date not null

);

grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;
