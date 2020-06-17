package com.farmacy.controllers;

import com.farmacy.enteties.VendorOrder;
import com.farmacy.repositories.VendorOrderRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class VendorOrderController {

    @Autowired
    VendorOrderRepository vendorOrderRepository;


    @PostMapping(path = "/vendor-orders", consumes = "application/json")
    public VendorOrder saveOrder(@RequestBody VendorOrder vendorOrder) {
        vendorOrderRepository.save(vendorOrder);
        return vendorOrder;
    }
}
