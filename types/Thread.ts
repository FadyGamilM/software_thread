export interface Thread {
    id: number,
    url: string,
    title: string,
    userId: number,
    createdAt: number, // store the number of milleseconds to render the hour and date only without timezone

}