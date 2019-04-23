create table if not exists site_creators
(
    id integer primary key not null,
    user_handle uuid references users(user_handle)    
);
grant select, insert, update, delete on table site_creators to project_app;
grant select on table site_creators to project_read;
