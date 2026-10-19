package com.enter.order_service.dto;

import com.enter.order_service.entity.Order;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.List;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerResponseDto {
    private Long customerId;
    private String name;
    private String email;
    private List<OrderResponseDto> orderList;
}
