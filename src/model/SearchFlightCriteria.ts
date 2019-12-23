export class SearchFlightCriteria {
    public from?: string | null = "";
    public to?: string | null = "";
    public departDate?: Date | undefined = undefined;
    public returnDate?: Date | undefined = undefined;
    public adults?: string | null = "";
    public children?: string | null = "";
    public infants?: string | null = "";
    public classType?: string | null = "";
    public roundTrip?: number = 0;
    public priceFrom?: number = undefined;
    public priceTo?: number = undefined;
    public departTime?: string | null = "";
    public airlines?: string[] = [];
}
