package com.farmacy.repositories;

import com.farmacy.enteties.Manufacturer;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "manufacturers", path = "manufacturers")
@CrossOrigin(origins = "http://localhost:4200")
public interface ManufacturerRepository extends CrudRepository<Manufacturer, Long> {
}
