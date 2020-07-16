export interface Message {
    id: string;
    email: string;
    content: string;
    createdAt: string;
    updatedAt: string;
}

export interface responseCreateMessageListener {
    provider: any;
    value: {
        data: {
            onCreateMessage: {
                id: string;
                email: string;
                content: string;
                createdAt: string;
                updatedAt: string;
            }
        }
    };
};