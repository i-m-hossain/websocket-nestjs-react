import { Server } from 'socket.io';
export declare class ChatGateway {
    server: Server;
    onModuleInit(): void;
    onNewMessage(body: any): void;
}
