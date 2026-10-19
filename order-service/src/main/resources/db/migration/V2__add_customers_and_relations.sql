CREATE TABLE customers (
    id BIGSERIAL primary key,
    name VARCHAR(255) not null,
    email VARCHAR(255)
)

ALTER TABLE orders
ADD COLUMN customer_id BIGINT;

ALTER TABLE orders
ADD CONSTRAINT fk_orders_customer FOREIGN KEY (customer_id) REFERENCES customers(id)