const Kafka = require('no-kafka');

var valueSum = 0;

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        var value = parseInt(m.message.value.toString('utf8'));
        valueSum = valueSum + value;
        console.log(valueSum);
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('testing', data);
});

//testar direcionamento das url's por exemplo http://127.0.0.1:9092/test
//enviar e receber atraves do kafka, via python e javascript
//criar um projeto de exemplo.