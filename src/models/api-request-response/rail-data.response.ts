export interface RailDataResponse {
    content: Content[];
    totalElements: number;
    totalPages: number;
    apiMapping: APIMapping[];
}

export interface APIMapping {
    url: string;
    method: string;
    timestamp: number;
    timeTaken: number;
}

export interface Content {
    uid: string;
    seasonUid: string;
    title: string;
    description: string;
    episodeNumber: null;
    releaseYear: number;
    director: Ctor[];
    actor: Ctor[];
    genre: string[];
    displayDuration: number;
    type: ContentType;
    categoryId: CategoryID[];
    streams: string;
    downloadUrl: string;
    trailers: Trailer[];
    mediaGuid: string;
    availableOn: number;
    availableTill: number;
    availableDays: null;
    isCcAvailable: boolean;
    parentalControl: ParentalControl[];
    isDownloadable: boolean;
    isCastable: boolean;
    countries: Country[];
    contentGuid: string;
    images: Image[];
    purchaseMode: PurchaseMode;
    maxQualityAvailable: MaxQualityAvailable;
    studio: Studio[];
}

export interface Ctor {
    creditType: CreditType;
    personId: string;
    personName: string;
}

export enum CreditType {
    Actor = "Actor",
    Director = "Director",
}

export enum CategoryID {
    AllAssets = "ALL_ASSETS",
    AllMovies = "ALL_MOVIES",
    SelectedMovie = "SELECTED_MOVIE",
}

export enum Country {
    Usa = "USA",
}

export interface Image {
    url: string;
    type: ImageType;
    width: number;
    height: number;
}

export enum ImageType {
    Landscape = "landscape",
    Portrait = "portrait",
    Square = "square",
}

export enum MaxQualityAvailable {
    The4K = "4K",
}

export interface ParentalControl {
    rating?: string;
}

export enum PurchaseMode {
    Subscription = "subscription",
}

export enum Studio {
    UniversalPictures = "Universal Pictures",
}

export interface Trailer {
    streams: string;
}

export enum ContentType {
    Movie = "movie",
}
