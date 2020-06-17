package com.farmacy;

import com.farmacy.enteties.*;
import org.springframework.data.rest.core.config.RepositoryRestConfiguration;
import org.springframework.data.rest.webmvc.config.RepositoryRestConfigurer;
import org.springframework.stereotype.Component;

@Component
public class ExposeEntityIdRestMvcConfiguration implements RepositoryRestConfigurer {

    @Override
    public void configureRepositoryRestConfiguration(RepositoryRestConfiguration config) {
        config.exposeIdsFor(Client.class);
        config.exposeIdsFor(ClientOrder.class);
        config.exposeIdsFor(Manufacturer.class);
        config.exposeIdsFor(Medecine.class);
        config.exposeIdsFor(MedecineGroup.class);
        config.exposeIdsFor(Vendor.class);
        config.exposeIdsFor(VendorOrder.class);
    }
}