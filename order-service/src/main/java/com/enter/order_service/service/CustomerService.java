package com.enter.order_service.service;

import com.enter.order_service.dto.CustomerRequestDto;
import com.enter.order_service.dto.CustomerResponseDto;

public interface CustomerService {
    CustomerResponseDto createCustomer(CustomerRequestDto request);
    CustomerResponseDto getCustomer(Long id);
    void deleteCustomer(Long id);
}