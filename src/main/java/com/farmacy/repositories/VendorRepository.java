package com.farmacy.repositories;

import com.farmacy.enteties.Vendor;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;
import org.springframework.web.bind.annotation.CrossOrigin;

@RepositoryRestResource(collectionResourceRel = "vendors", path = "vendors")
@CrossOrigin(origins = "http://localhost:4200")
public interface VendorRepository extends CrudRepository<Vendor, Long> {
}
