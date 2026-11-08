package com.enter.order_service.controller;

import com.enter.order_service.dto.CustomerRequestDto;
import com.enter.order_service.dto.CustomerResponseDto;
import com.enter.order_service.service.CustomerService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("api/customers")
@CrossOrigin(origins = "http://localhost:5173") // Allow Vite frontend
@RequiredArgsConstructor
@Slf4j
public class CustomerController {

    private final CustomerService customerService;

    @PostMapping
    public ResponseEntity<CustomerResponseDto> createCustomer(@Valid @RequestBody CustomerRequestDto requestDto){
        log.info("Received HTTP POST request to create a customer: {}", requestDto.getName());
        CustomerResponseDto responseDto = customerService.createCustomer(requestDto);
        return ResponseEntity.status(HttpStatus.CREATED).body(responseDto);
    }
}