package adt.su22.real_estimate_backend.properties.MongoCols;

import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.mongodb.core.mapping.Document;

@Data
@AllArgsConstructor
@NoArgsConstructor
@JsonSerialize
@Document(collection = "properties")
public class City {
    String city;
}
