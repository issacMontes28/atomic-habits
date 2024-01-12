export interface HabitLaw {
    id: number;
    name: string;
    keyWord: string;
    quote: string;
}

export interface LawStep {
    id: number;
    lawId: number;
    instruction: string;
}