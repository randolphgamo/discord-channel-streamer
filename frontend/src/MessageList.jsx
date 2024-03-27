import { useEffect, useState } from "react";
import { io } from "socket.io-client";

function MessageList() {
  //holds the list of messages
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    //connect to our server
    const socket = io("http://localhost:5000");

    //listen for initial messages
    socket.on("initial-messages", (messages) => setMessages(messages));

    //listen for incoming new messages
    socket.on("new-message", (message) =>
      setMessages((prevMessages) => [message, ...prevMessages])
    );

    //clean up
    return () => socket.disconnect();
  }, []); //empty dependency array so it runs only once.

  return (
    <>
      <table className="table w-full text-left table-fixed">
        <thead>
          <tr className="bg-gray-400 text-white">
            <th className="px-4 py-2">
              Time
            </th>
            <th className="px-4 py-2">
              Author
            </th>
            <th className="px-4 py-2">
              Message
            </th>
            <th className="px-4 py-2 w-2/4">
              Attachment(s)
            </th>
          </tr>
        </thead>
        <tbody>
          {messages.map((message) => (
            <tr key={message.id} className="border-b hover:bg-gray-100">
              <td className="font-bold px-4 py-2">{message.timestamp}</td>
              <td className="font-thin px-4 py-2">{message.author}</td>
              <td className="font-thin px-4 py-2">{message.content}</td>
              <td className="font-thin px-4 py-2">
                {message.attachments && (
                  <ul className="list-disc pl-4">
                    {message.attachments.map((attachment) => (
                      <li key={attachment.url} className=" text-blue-500 hover:underline">
                        <a href={attachment.url}>{attachment.name}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default MessageList;
