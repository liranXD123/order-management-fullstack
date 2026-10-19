package com.enter.order_service.dal;

import com.enter.order_service.entity.Customer;
import com.enter.order_service.repository.CustomerRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Component;

import java.util.Optional;

@Component
@RequiredArgsConstructor
public class CustomerDalImpl implements CustomerDal {

    private final CustomerRepository customerRepository;

    @Override
    public Customer save(Customer customer){
        return customerRepository.save(customer);
    }

    @Override
    public Optional<Customer> findById(Long id) {
        return customerRepository.findById(id);
    }

    @Override
    public void deleteById(Long id) {
        customerRepository.deleteById(id);
    }
}
