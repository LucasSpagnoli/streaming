type OpinionCardProps = {
    name: string;
    text: string;
};

type PlanCardProps = {
    plan: string;
    text: string;
    price: number;
    monthly: boolean;
};

type QuestionCardProps = {
    question: string;
    answer: string;
};

export type { OpinionCardProps, PlanCardProps, QuestionCardProps };