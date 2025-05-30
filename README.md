# 📦 Kafka Node.js Demo

A minimal Node.js application demonstrating Apache Kafka integration using the `kafkajs` library. This project showcases how to set up Kafka producers and consumers, manage topics, and facilitate message streaming between services.

## 🚀 Features

- Kafka producer and consumer implementation using `kafkajs`
- Topic creation and management
- Docker Compose setup for Kafka and Zookeeper
- Simple CLI-based message production and consumption

## 🛠️ Prerequisites

- [Node.js](https://nodejs.org/) (v14 or later)
- [Docker](https://www.docker.com/) & [Docker Compose](https://docs.docker.com/compose/)

## 📦 Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/rkd1989/kafka-nodejs.git
   cd kafka-nodejs
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Start Kafka and Zookeeper using Docker Compose:**

   ```bash
   docker-compose up -d
   ```

   This will start Kafka and Zookeeper services in the background.

## 📄 Project Structure

```
kafka-nodejs/
├── admin.js             # Script to create Kafka topics
├── consumer.js          # Kafka consumer implementation
├── producer.js          # Kafka producer implementation
├── kafka-client.js      # Kafka client configuration
├── docker-compose.yml   # Docker Compose setup for Kafka and Zookeeper
├── package.json         # Project metadata and scripts
└── README.md            # Project documentation
```

## ⚙️ Usage

### 1. **Create a Kafka Topic**

Before producing or consuming messages, create a Kafka topic:

```bash
node admin.js
```

This script connects to Kafka and creates a topic named `test-topic`.

### 2. **Start the Consumer**

In a new terminal window, start the Kafka consumer:

```bash
node consumer.js
```

The consumer will subscribe to the `test-topic` and log incoming messages.

### 3. **Start the Producer**

In another terminal window, start the Kafka producer:

```bash
node producer.js
```

You'll be prompted to enter messages. Each message you input will be sent to the `test-topic` and should appear in the consumer's output.

## 🧪 Example

**Producer Terminal:**

```bash
> Hello, Kafka!
> This is a test message.
```

**Consumer Terminal:**

```bash
Received message: Hello, Kafka!
Received message: This is a test message.
```

## 🧹 Cleanup

To stop the Kafka and Zookeeper services:

```bash
docker-compose down
```

## 📚 Resources

- [KafkaJS Documentation](https://kafka.js.org/docs/introduction)
- [Apache Kafka Documentation](https://kafka.apache.org/documentation/)

## 📝 License

This project is licensed under the MIT License.

---

Feel free to contribute or raise issues to improve this project!
