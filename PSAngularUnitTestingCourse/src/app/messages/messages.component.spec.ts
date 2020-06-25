import { MessageService } from "../message.service";

describe('MessageService', () => {
    let service: MessageService;
    
    beforeEach(() => {
        
    });

    it('should have no messages to start', () => {
        service = new MessageService();

        expect(service.messages.length).toBe(0);
    });

    it('should add a message when add is called', () => {
        // Arrange
        service = new MessageService();

        service.add('something');

        expect(service.messages.length).toBe(1);
    });

    it('should remove all messages when clear is called', () => {
        // Arrange
        service = new MessageService();
        service.add('something');

        // Act
        service.clear();

        expect(service.messages.length).toBe(0);
    });
});