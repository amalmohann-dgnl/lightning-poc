export type diamensions = {
    w: number,
    h: number,
    margin: number,
    minimumCardsInViewport: number
}

type cardSizes = {
    regular: diamensions,
    wide: diamensions
}

export const cardSizes: cardSizes = {
    regular: {
        w: 216,
        h: 324,
        margin: 30,
        minimumCardsInViewport: 7,
    },
    wide: {
        w: 324,
        h: 216,
        margin: 30,
        minimumCardsInViewport: 5,
    },
};
