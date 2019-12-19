import { SearchFlightCriteria } from "../model/SearchFlightCriteria";
import { FlightDetail } from "../model/FlightDetail";
import { flightsRoundTrip, flightsOneWay } from "../data/flights";
import { fromToOptions } from "../data/fromToOptions";
import axios from "axios";

export class FlightService {
    public async search(criteria: SearchFlightCriteria): Promise<FlightDetail[]> {
        // let from = fromToOptions.find(f => f.key === criteria.from);
        // let to = fromToOptions.find(t => t.key === criteria.to);

        // const departText = from ? from.text : "";
        // const returnText = to ? to.text : "";       

        // if (criteria.roundTrip) {
        //     result = flightsRoundTrip.filter(f => {
        //         return f.Depart === departText && f.Return === returnText;
        //     });
        // } else {
        //     result = flightsOneWay.filter(f => {
        //         return f.Depart === departText && f.Return === returnText;
        //     });
        // }

        return axios.post('http://zerotoheroautomation-api.azurewebsites.net/api/flight', {
            "from": "Shanghai",
            "to": "Seoul",
            "departDate": "2020-01-14T00:00:00.000Z",
            "returnDate": "2020-01-16T00:00:00.000Z",
            "classType": "Business Class",
            "priceFrom": 700,
            "priceTo": 790
        })
            .then(function (response) {
                return response.data.model || [];
            })
            .catch(function (error) {
                console.log(error);
                return [];
            });
    }
}
