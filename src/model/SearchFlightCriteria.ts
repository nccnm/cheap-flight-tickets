export class SearchFlightCriteria {
    public from?: string | null = "";
    public to?: string | null = "";
    public departDate?: Date | undefined = undefined;
    public returnDate?: Date | undefined = undefined;
    public adults?: string | null = "";
    public children?: string | null = "";
    public infants?: string | null = "";
    public classType?: string | null = "";
    public roundTrip?: number = 1;
    public priceFrom?: number = 1;
    public priceTo?: number = 1;
    public departTime?: string | null = "";
    public airlines?: string[] = [];
}
