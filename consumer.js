const kafka = require("./kafka-client");

// Create a consumer instance
const consumer = kafka.consumer({ groupId: "test-group" });

const consume = async () => {
  try {
    // Connect the consumer to the Kafka broker
    await consumer.connect();
    console.log("Consumer connected - 🔗");

    // Subscribe to the topic
    // fromBeginning: true - attribute do reads messages from the beginning
    await consumer.subscribe({ topic: "first_topic", fromBeginning: true });
    console.log("Subscribed to topic - 📥");

    // Run the consumer and process messages
    await consumer.run({
      eachMessage: async ({ topic, partition, message }) => {
        console.log({
          topic,
          partition,
          offset: message.offset,
          value: message.value.toString(),
        });
      },
    });

    /* 
    If you want to disconnect the consumer after reading the messages, 
    uncomment the code below 👇. 
    🚧 Sometimes it takes time to receive messages. if the consumer 
    disconnected before messages are received we cannot see the messages.
  */

    // consumer.disconnect();
  } catch (err) {
    console.error("Error in consumer:", err);
  }
};

consume();
