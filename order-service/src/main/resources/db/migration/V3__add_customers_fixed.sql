CREATE TABLE customers (
                           customer_id BIGSERIAL PRIMARY KEY,
                           name VARCHAR(255) NOT NULL,
                           email VARCHAR(255) NOT NULL
);

ALTER TABLE orders ADD COLUMN customer_id BIGINT;

ALTER TABLE orders ADD CONSTRAINT fk_customer FOREIGN KEY (customer_id) REFERENCES customers(customer_id);