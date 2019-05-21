create table if not exists order_items
(
    order_id uuid references orders(order_id),
    item_id uuid references items(item_id),
    quantity integer not null,
    primary key(order_id, item_id)
);
grant select, insert, update, delete on table order_items to project_app;
grant select on table order_items to project_read;