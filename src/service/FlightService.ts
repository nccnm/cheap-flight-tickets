import { SearchFlightCriteria } from "../model/SearchFlightCriteria";
import { FlightDetail } from "../model/FlightDetail";
import { flightsRoundTrip, flightsOneWay } from "../data/flights";
import { fromToOptions } from "../data/fromToOptions";
import axios from "axios";

export class FlightService {
    public async search(criteria: SearchFlightCriteria): Promise<FlightDetail[]> {
        let from = fromToOptions.find(f => f.key === criteria.from);
        let to = fromToOptions.find(t => t.key === criteria.to);

        const departText = from ? from.text : "";
        const returnText = to ? to.text : "";

        // if (criteria.roundTrip) {
        //     result = flightsRoundTrip.filter(f => {
        //         return f.Depart === departText && f.Return === returnText;
        //     });
        // } else {
        //     result = flightsOneWay.filter(f => {
        //         return f.Depart === departText && f.Return === returnText;
        //     });
        // }

        return axios.post('https://flyplanapi.azurewebsites.net/api/flight', {
            "from": departText,
            "to": returnText,
            "departDate": criteria.departDate ? criteria.departDate.getFullYear() + "-" + (criteria.departDate.getMonth() + 1) + "-" + criteria.departDate.getDate() : null,
            "returnDate": criteria.returnDate ? criteria.returnDate.getFullYear() + "-" + (criteria.returnDate.getMonth() + 1) + "-" + criteria.returnDate.getDate() : null,
            "classType": "Business Class",
            "priceFrom": 0,
            "priceTo": 1000,
            "roundTrip": criteria.roundTrip
        })
            .then(function (response) {
                if (response.data.model.length > 10) {
                    return response.data.model.slice(0, 10);
                }
                return response.data.model || [];
            })
            .catch(function (error) {
                console.error(error);
                return [];
            });
    }
}
