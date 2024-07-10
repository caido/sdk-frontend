export type Findings = {
    createFinding: (requestId: string, options: CreateFindingsOptions) => Promise<Finding | undefined>;
};
type Finding = {
    id: string;
    title: string;
    description?: string;
    reporter: string;
    host: string;
    path: string;
};
type CreateFindingsOptions = {
    title: string;
    description?: string;
    reporter: string;
    dedupeKey?: string;
};
export {};
