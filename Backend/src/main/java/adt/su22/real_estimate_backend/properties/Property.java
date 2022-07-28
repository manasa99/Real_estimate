package adt.su22.real_estimate_backend.properties;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import com.mongodb.lang.NonNullApi;
import lombok.Data;
import lombok.Getter;
import lombok.NonNull;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import org.springframework.lang.NonNullFields;

@Data
@Document(collection = "properties")
@Getter
@Setter
@JsonPropertyOrder(alphabetic = true)
public class Property {

    @Id
    private String id;

    @NonNull
    private boolean status = true;

    @NonNull
    private int bed;

    @NonNull
    private int bath;

    @NonNull
    private int price;

    @NonNull
    private float acre_lot;

    @NonNull
    private float house_size;

    @NonNull
    private String added_by="admin";

    private String sold_date;

    @NonNull
    private String city;

    @NonNull
    private String street="";

    @NonNull
    private String state;

    @NonNull
    private String full_address="";

    @NonNull
    private int zip_code;


}
