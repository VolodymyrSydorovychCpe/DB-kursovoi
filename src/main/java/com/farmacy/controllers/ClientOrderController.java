package com.farmacy.controllers;

import com.farmacy.enteties.ClientOrder;
import com.farmacy.repositories.ClientOrderRepository;
import com.farmacy.repositories.ClientRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class ClientOrderController {

    @Autowired
    ClientOrderRepository clientOrderRepository;

    @PostMapping(path = "/client-orders", consumes = "application/json")
    public ClientOrder saveOrder(@RequestBody ClientOrder clientOrder) {
        clientOrderRepository.save(clientOrder);
        return clientOrder;
    }
}
