package com.farmacy.repositories;

import com.farmacy.enteties.Medecine;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.data.rest.core.annotation.RestResource;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;

import java.util.Optional;

@RepositoryRestResource(collectionResourceRel = "medicines", path = "medicine-list")
@CrossOrigin(origins = "http://localhost:4200")
public interface MedecineRepository extends CrudRepository<Medecine, Long> {

    @RestResource(exported = false)
    Medecine save(@RequestBody Medecine entity);
}
