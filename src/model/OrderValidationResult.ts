class TravellerResult {
    public personType?: string = "";
    public firstName?: string = "";
    public lastName?: string = "";
    public dateOfBirth?: string = "";
    public gender?: string = "";
    public nationality?: string = "";
    public pasportId?: string = "";
    public pasportExpiryDateMonth?: string = "";
    public pasportExpiryDateYear?: string = "";
    public pasportNoExpiry?: string = "";
    public checkedBaggae?: string = "";
    public travelInsurance?: string = "";
}

class PaymentInfoResult {
    public creditCardType?: string = "";
    public cardNumber?: string = "";
    public nameOnTheCard?: string = "";
    public expiryDateInMonth?: string = "";
    public expiryDateInYear?: string = "";
    public cvvCode?: string = "";
    public countryId?: string = "";
    public billingAddress?: string = "";
    public city?: string = "";
    public zipCode?: string = "";
}

class ConfirmationInfoResult {
    public emailAddress?: string = "";
    public phoneNumber?: string = "";
    public isAcceptedRule?: string = "";
    public isSendEmail?: string = "";
}

class OrderResult {
    travellerViewModels: TravellerResult[] = [];
    paymentViewModel: PaymentInfoResult = new PaymentInfoResult();
    confirmationInfoViewModel: ConfirmationInfoResult = new ConfirmationInfoResult();
}

export class OrderValidationResult {
    isValid: boolean = false;
    result: OrderResult;

    constructor(numberOfTraveller: number) {
        this.result = new OrderResult();

        for (let i = 0; i < numberOfTraveller; i++) {
            const travallerResult = new TravellerResult();
            this.result.travellerViewModels.push(travallerResult);
        }
    }
}