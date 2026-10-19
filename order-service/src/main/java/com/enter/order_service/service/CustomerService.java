package com.enter.order_service.service;

import com.enter.order_service.entity.Customer;

public interface CustomerService {
    CustomerResponseDto createCustomer(CustomerRequestDto customerRequestDto);

    CustomerResponseDto getCustomer(Long id);

    void deleteCustomer(Long id);
}
