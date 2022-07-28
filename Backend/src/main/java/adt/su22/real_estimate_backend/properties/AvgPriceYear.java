package adt.su22.real_estimate_backend.properties;

import com.fasterxml.jackson.annotation.JsonPropertyOrder;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@Document(collection = "avg_price_per_acre_by_year")
@Getter
@Setter
@JsonPropertyOrder(alphabetic = true)
public class AvgPriceYear {

    @Id
    public float avg_price;

    public int year;
}
