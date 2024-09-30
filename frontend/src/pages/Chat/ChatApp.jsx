import React, { useState } from 'react';
import { MessageList, Input, Button as ChatButton } from 'react-chat-elements';
import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet";
import 'react-chat-elements/dist/main.css';

export function ChatApp({ children }) {
    const [messages, setMessages] = useState([
        {
            position: 'left',
            type: 'text',
            text: 'Hello! How can I help you?',
            date: new Date(),
        },
        {
            position: 'right',
            type: 'text',
            text: 'I need help with my account.',
            date: new Date(),
        },
    ]);

    const [newMessage, setNewMessage] = useState('');

    const handleSendMessage = () => {
        if (newMessage.trim()) {
            setMessages([
                ...messages,
                {
                    position: 'right',
                    type: 'text',
                    text: newMessage,
                    date: new Date(),
                },
            ]);
            setNewMessage('');
        }
    };

    return (
        <Sheet>
            <SheetTrigger asChild>{children}</SheetTrigger>
            <SheetContent className="flex flex-col max-h-screen h-[80vh] w-[400px]">
                <SheetHeader>
                    <SheetTitle>Chat</SheetTitle>
                </SheetHeader>

                {/* Chat Body */}
                <div className="flex-1 overflow-auto p-4">
                    <MessageList
                        className="message-list"
                        lockable={true}
                        toBottomHeight={'100%'}
                        dataSource={messages}
                    />
                </div>

                {/* Message Input */}
                <div className="p-4 border-t flex items-center space-x-2">
                    <Input
                        placeholder="Type a message..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        className="flex-1"
                        rightButtons={
                            <ChatButton
                                text={'Send'}
                                onClick={handleSendMessage}
                                className="ml-2"
                            />
                        }
                    />
                </div>

                <SheetClose asChild>
                    <Button variant="outline">Close</Button>
                </SheetClose>
            </SheetContent>
        </Sheet>
    );
}
