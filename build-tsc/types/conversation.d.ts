interface ConversationUser {
    name: string;
    email: string;
}
interface ConversationPhrase {
    type: string;
    text: string;
}
interface SentimentScore {
    score: number;
}
interface Sentiment {
    polarity: SentimentScore;
    suggested: string;
}
interface MessageWord {
    word: string;
    startTime: string;
    endTime: string;
}
interface Message {
    id: string;
    text: string;
    from: ConversationUser;
    startTime: string;
    endTime: string;
    conversationId: string;
    phrases: ConversationPhrase[];
    sentiment: Sentiment;
    words: MessageWord[];
}
