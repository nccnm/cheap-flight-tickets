export class SearchFlightCriteria {
    public from?: string | null = "";
    public to?: string | null = "";
    public departDate?: Date | undefined = new Date(Date.now());
    public returnDate?: Date | undefined = undefined;
    public adults?: string | null = "";
    public children?: string | null = "";
    public infants?: string | null = "";
    public classType?: string | null = "0";
    public roundTrip?: number = 0;
    public priceFrom?: number = 100;
    public priceTo?: number = 1000;
    public departTime?: string | null = "";
    public airlines?: string[] = [];
    public orderBy?: string = "TotalMoney"
}
