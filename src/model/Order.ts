import uuidv4 from 'uuid/v4';
import { Traveller } from "./Traverller"
import { PaymentInfo } from "./PaymentInfo"
import { ConfirmationInfo } from "./ConfirmationInfo"

export class Order {
    public flightId: string;
    public travellerViewModels: Traveller[] = [];
    public paymentViewModel: PaymentInfo = new PaymentInfo();
    public confirmationInfoViewModel: ConfirmationInfo = new ConfirmationInfo();

    constructor(queries?) {
        if (queries) {
            this.flightId = queries.id;
            for (let i = 0; i < parseInt(queries.adults); i++) {
                let traverller = new Traveller();

                traverller.id = uuidv4();
                traverller.personType = "adult";

                this.travellerViewModels.push(traverller);
            }

            for (let i = 0; i < parseInt(queries.childrens); i++) {
                let traverller = new Traveller();

                traverller.id = uuidv4();
                traverller.personType = "children";

                this.travellerViewModels.push(traverller);
            }

            for (let i = 0; i < parseInt(queries.infants); i++) {
                let traverller = new Traveller();

                traverller.id = uuidv4();
                traverller.personType = "infant";

                this.travellerViewModels.push(traverller);
            }
        }


    }
}