const kafka = require("./kafka-client");

const admin = kafka.admin();

const createTopic = async (topicName) => {
  await admin.connect();
  console.log(`Connected to Kafka broker - 📪`);

  const topicsToCreate = [
    {
      topic: topicName,
      numPartitions: 1,
      replicationFactor: 1,
    },
  ];

  await admin.createTopics({
    topics: topicsToCreate,
  });
  console.log(`Topic "${topicName}" created successfully - 📁`);

  await admin.disconnect();
  console.log(`Disconnected from Kafka broker`);
};

const topicName = "first_topic";

createTopic(topicName).catch(console.error);
