export type Business = {
    id: string;
    name: string;
    business_type: string;
    industry: string;
    company_phone: string;
    [key: string]: any; // For additional dynamic properties
};