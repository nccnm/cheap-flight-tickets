export class Traveller {
    public id?: string;
    public personType?: string;
    public firstName?: string;
    public lastName?: string;
    public dateOfBirth?: Date = null;
    public gender?: number;
    public nationality?: number;
    public pasportId?: string;
    public pasportExpiryDateMonth?: string;
    public pasportExpiryDateYear?: string;
    public pasportNoExpiry?: boolean = false;
    public checkedBaggae?: number = 0;
    public travelInsurance?: string;
}

