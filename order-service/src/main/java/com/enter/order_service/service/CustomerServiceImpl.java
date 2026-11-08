package com.enter.order_service.service;

import com.enter.order_service.dal.CustomerDal;
import com.enter.order_service.dto.CustomerRequestDto;
import com.enter.order_service.dto.CustomerResponseDto;
import com.enter.order_service.entity.Customer;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class CustomerServiceImpl implements CustomerService {

    private final CustomerDal customerDal;

    @Override
    public CustomerResponseDto createCustomer(CustomerRequestDto request) {
        // 1. Map Request DTO to Entity
        Customer newCustomer = Customer.builder()
                .name(request.getName())
                .email(request.getEmail())
                .build();

        // 2. Save via DAL and capture the returned entity (which now has the DB-generated ID)
        Customer savedCustomer = customerDal.save(newCustomer);

        // 3. Map the saved Entity to Response DTO using the Builder
        return CustomerResponseDto.builder()
                .customerId(savedCustomer.getCustomerId())
                .name(savedCustomer.getName())
                .email(savedCustomer.getEmail())
                .orderList(Collections.emptyList())
                .build();
    }

    @Override
    public CustomerResponseDto getCustomer(Long id) {
        return null; // Will implement in a future ticket
    }

    @Override
    public void deleteCustomer(Long id) {
        // Will implement in a future ticket
    }
}