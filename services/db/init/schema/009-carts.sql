create table if not exists carts

(
    user_id uuid references users(user_handle),
    item_id uuid references items(item_id),
    active boolean not null default true,
    quantity numeric not null default 1,
    primary key (item_id, user_id)
);

grant select, insert, update, delete on table carts to project_app;
grant select on table item_images to project_read;