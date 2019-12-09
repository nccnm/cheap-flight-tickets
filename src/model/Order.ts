import uuidv4 from 'uuid/v4';
import { Traverller } from "./Traverller"
import { Payment } from "./Payment"
import { Confirmation } from "./Confirmation"

export class Order {
    public FlightId: string;
    public Traverllers: Traverller[] = [];
    public Payment: Payment = new Payment();
    public Confirmation: Confirmation = new Confirmation();

    constructor(queries) {
        this.FlightId = queries._id;

        for (let i = 0; i < parseInt(queries.adults); i++) {
            let traverller = new Traverller();

            traverller._id = uuidv4();
            traverller.PersonType = "adult";

            this.Traverllers.push(traverller);
        }

        for (let i = 0; i < parseInt(queries.childrens); i++) {
            let traverller = new Traverller();

            traverller._id = uuidv4();
            traverller.PersonType = "children";

            this.Traverllers.push(traverller);
        }

        for (let i = 0; i < parseInt(queries.infants); i++) {
            let traverller = new Traverller();

            traverller._id = uuidv4();
            traverller.PersonType = "infant";

            this.Traverllers.push(traverller);
        }
    }
}