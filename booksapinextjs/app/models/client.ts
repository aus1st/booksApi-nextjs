export interface client {
    clientName: string,
    clientEmail: string
}

export interface userToken {
    accessToken : string;
    };

export interface newOrder{
    bookId: number,
    customerName: string
}