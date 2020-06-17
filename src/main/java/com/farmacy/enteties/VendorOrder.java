package com.farmacy.enteties;

import lombok.Data;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.sql.Date;
import java.util.Map;

@Entity
@Data
public class VendorOrder {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private Date orderDate;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "vendor_id")
    private Vendor vendor;

    @RestResource(rel = "vendorOrderItems", path = "vendor-order-items")
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "Medecine_vendor_order_items",
            joinColumns = @JoinColumn(name = "vendor_order_id"))
    @MapKeyJoinColumn(name = "medecine_id")
    @Column(name = "count")
    private Map<Medecine, Integer> vendorOrderItems;
}
