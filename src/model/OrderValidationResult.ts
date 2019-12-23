export class TravellerResult {
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

export class PaymentInfoResult {
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

export class ConfirmationInfoResult {
    public emailAddress?: string = "";
    public phoneNumber?: string = "";
    public isAcceptedRule?: string = "";
}

export class OrderResult {
    travellerViewModels: TravellerResult[] = [];
    paymentViewModel: PaymentInfoResult = new PaymentInfoResult();
    confirmationInfoViewModel: ConfirmationInfoResult = new ConfirmationInfoResult();
}

export class OrderValidationResult {
    result: OrderResult = new OrderResult();

    isValid(): boolean {
        let result = true;

        if (this.result.confirmationInfoViewModel || this.result.paymentViewModel) {
            result = false
        }

        this.result.travellerViewModels.forEach(travellerResult => {
            if (travellerResult) {
                result = false
            }
        });

        return result;
    }
}