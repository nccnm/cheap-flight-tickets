export class PaymentInfo {
    public creditCardType?: string = "Master";
    public cardNumber?: string;
    public nameOnTheCard?: string;
    public expiryDateInMonth?: string;
    public expiryDateInYear?: string;
    public cvvCode?: string;
    public countryId?: string;
    public billingAddress?: string;
    public city?: string;
    public zipCode?: string;
}