create table if not exists items
(
    item_id uuid primary key default gen_random_uuid(),
    item_name text not null,
  	price integer not null,
  	category text not null
);

grant select, insert, update, delete on table items to project_app;
grant select on table items to project_read;
