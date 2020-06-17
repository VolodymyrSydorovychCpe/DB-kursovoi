package com.farmacy.controllers;

import com.farmacy.enteties.Medecine;
import com.farmacy.repositories.MedecineRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
public class MedecineController {

    @Autowired
    MedecineRepository medecineRepository;

    @PostMapping(path="/medicine", consumes = "application/json")
    public Medecine saveOrder(@RequestBody Medecine medecine) {
        medecineRepository.save(medecine);
        return medecine;
    }
}
