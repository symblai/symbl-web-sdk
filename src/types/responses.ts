interface JobResponse {
    id: string;
    status: string;
}
interface MessageResponse {
    messages: Message[];
}
interface AsyncResponse {
    conversationId: string;
    jobId: string;
}
