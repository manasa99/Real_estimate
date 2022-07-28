package adt.su22.real_estimate_backend.properties;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface AvgPriceYearRepository  extends MongoRepository<AvgPriceYear, String> {

    List<AvgPriceYear> findAll();
}
