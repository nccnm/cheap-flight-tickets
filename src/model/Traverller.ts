export class Traveller {
    public id?: string;
    public PersonType?: string = "";
    public FirstName?: string = "";
    public LastName?: string = "";
    public DateOfBirth?: Date = null;
    public Gender?: number = 0;
    public Nationality?: number = 0;
    public PasportId?: string = "";
    public PasportExpiryDateMonth?: string = "";
    public PasportExpiryDateYear?: string = "";
    public PasportNoExpiry?: boolean = false;
    public CheckedBaggae?: string = "0";
    public TravelInsurance?: string = "";
}

