package com.enter.order_service.dal;

import com.enter.order_service.entity.Customer;

import java.util.Optional;

public interface CustomerDal {

    Customer save(Customer customer);
    Optional<Customer> findById(Long id);
    void deleteById(Long id);

}
