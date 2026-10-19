package com.enter.order_service.dto;

import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class CustomerRequestDto {

    @NotBlank(message = "name cant be empty or null")
    private String name;

    @NotBlank(message = "email cant be blank or null")
    private String email;
}
