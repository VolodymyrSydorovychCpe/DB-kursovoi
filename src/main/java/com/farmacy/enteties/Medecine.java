package com.farmacy.enteties;

import com.google.gson.Gson;
import lombok.Data;
import lombok.ToString;
import org.springframework.data.rest.core.annotation.RestResource;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Entity
@Data
@ToString(exclude = "vendors")
public class Medecine {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    private String name;

    private String composition;

    @ManyToOne(fetch = FetchType.LAZY)
    private Manufacturer manufacturer;

    @RestResource(rel = "vendors", path = "vendors")
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "vendor_medecine",
            joinColumns = { @JoinColumn(name = "medecine_id") },
            inverseJoinColumns = { @JoinColumn(name = "vendor_id") }
    )
    private Set<Vendor> vendors;

    @ManyToOne(fetch = FetchType.EAGER)
    private MedecineGroup medecineGroup;


    @Override
    public String toString() {
        return new Gson().toJson(new Medecine.MedicineDTO(this));
    }

    private class MedicineDTO {
        private Long id;

        private String name;

        private String composition;


        public MedicineDTO(Medecine medecine) {
            this.id = medecine.id;
            this.name = medecine.name;
            this.composition = medecine.composition;
        }
    }
}
