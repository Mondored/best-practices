export interface IStock {
    stockId: number;
    stockSymbol: string;
    stockName: string;
    usdHufConvert: number;
    basePrice: number;
    shares: number;
    devidend: number;
    description?: string;
}