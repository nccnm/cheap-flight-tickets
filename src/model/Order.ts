import uuidv4 from 'uuid/v4';
import { Traveller } from "./Traverller"
import { PaymentInfo } from "./PaymentInfo"
import { ConfirmationInfo } from "./ConfirmationInfo"

export class Order {
    public FlightId: string;
    public Travellers: Traveller[] = [];
    public Payment: PaymentInfo = new PaymentInfo();
    public Confirmation: ConfirmationInfo = new ConfirmationInfo();

    constructor(queries) {
        this.FlightId = queries._id;

        for (let i = 0; i < parseInt(queries.adults); i++) {
            let traverller = new Traveller();

            traverller.id = uuidv4();
            traverller.PersonType = "adult";

            this.Travellers.push(traverller);
        }

        for (let i = 0; i < parseInt(queries.childrens); i++) {
            let traverller = new Traveller();

            traverller.id = uuidv4();
            traverller.PersonType = "children";

            this.Travellers.push(traverller);
        }

        for (let i = 0; i < parseInt(queries.infants); i++) {
            let traverller = new Traveller();

            traverller.id = uuidv4();
            traverller.PersonType = "infant";

            this.Travellers.push(traverller);
        }
    }
}