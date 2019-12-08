import { SearchFlightCriteria } from "../model/SearchFlightCriteria";
import { FlightDetail } from "../model/FlightDetail";
import { flightsRoundTrip, flightsOneWay } from "../data/flights";
import { fromToOptions } from "../data/fromToOptions";

export class FlightService {
    public search(criteria: SearchFlightCriteria): FlightDetail[] {
        let from = fromToOptions.find(f => f.key === criteria.from);
        let to = fromToOptions.find(t => t.key === criteria.to);

        const departText = from ? from.text : "";
        const returnText = to ? to.text : "";

        let result;

        if (criteria.roundTrip) {
            result = flightsRoundTrip.filter(f => {
                return f.Depart === departText && f.Return === returnText;
            });
        } else {
            result = flightsOneWay.filter(f => {
                return f.Depart === departText && f.Return === returnText;
            });
        }

        return result;
    }
}
