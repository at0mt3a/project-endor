create table if not exists orders
(
    order_id uuid primary key default gen_random_uuid(),
    purchaser_id uuid references users(user_handle),
    seller_id uuid references sellers(seller_id),
    order_date timestamptz

);
grant select, insert, update, delete on table orders to project_app;
grant select on table orders to project_read;