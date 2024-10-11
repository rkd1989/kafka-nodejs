const kafka = require("./kafka-client");

// Create a producer instance
const producer = kafka.producer();

const runProducer = async () => {
  try {
    // Connect the producer to the Kafka broker
    await producer.connect();
    console.log("Producer connected - 🔗");

    // Send messages to the topic
    await producer.send({
      topic: "first_topic", // Replace with your topic name
      messages: [
        { value: "Hello World!" },
        { value: "Hello Kafka" },
        { value: "Kafka, Docker, Node.js" },
      ],
    });

    console.log("Messages sent - 📤");

    // Disconnect the producer
    await producer.disconnect();
    console.log("Producer disconnected - 🛑");
  } catch (err) {
    console.error("Error in producer:", err);
  }
};

runProducer();
