package adt.su22.real_estimate_backend.properties;
import static org.springframework.data.mongodb.core.aggregation.Aggregation.*;
import static org.springframework.data.mongodb.core.query.Criteria.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.aggregation.*;
import org.springframework.data.mongodb.core.query.Criteria;

import java.util.List;

import static com.mongodb.client.model.Filters.where;

public class StateWisePropertiesAggregator {

    @Autowired
    private MongoTemplate mt;

    public List<StateWiseProperties> getStateWiseProperties(){
//        MatchOperation matchOperation = Aggregation.match(Criteria.where("state").alike(null));
        GroupOperation groupOperation = Aggregation.group("state").count().as("count");
        Aggregation aggregation = Aggregation.newAggregation(groupOperation);
        AggregationResults<StateWiseProperties> groupResults
                = mt.aggregate(aggregation,"properties",StateWiseProperties.class);
        return groupResults.getMappedResults();
    }
}
