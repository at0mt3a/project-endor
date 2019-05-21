create table if not exists sellers
(
    seller_id uuid primary key references users(user_handle),
    seller_name text not null,
    seller_description text not null,
    seller_rating text not null
);
grant select, insert, update, delete on table sellers to project_app;
grant select on table sellers to project_read;