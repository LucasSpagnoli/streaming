const splitFaqs = (faqs: Array<{ question: string, answer: string }>) => {
    const left = faqs.filter((_, i) => i % 2 === 0);
    const right = faqs.filter((_, i) => i % 2 !== 0);
    return { left, right };
};

export { splitFaqs };