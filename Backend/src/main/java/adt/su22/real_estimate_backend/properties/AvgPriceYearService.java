package adt.su22.real_estimate_backend.properties;

import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@AllArgsConstructor
@Service
public class AvgPriceYearService {
    private final AvgPriceYearRepository avgPriceYearRepository;

    List<AvgPriceYear> getAPY(){
        return avgPriceYearRepository.findAll();
    }
}
