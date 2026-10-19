package com.enter.order_service.repository;

import com.enter.order_service.entity.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

    public interface CustomerRepository extends JpaRepository<Customer, Long> {
}
