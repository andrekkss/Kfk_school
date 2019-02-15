const Kafka = require('no-kafka');

var valueSum = 0;

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data = function (messageSet) {
    messageSet.forEach(function (m) {
        console.log('[ oq vem: '+m.message.value+' ]');
        var value = JSON.parse(m.message.value);
        console.log(JSON.stringify(value.sadas));
        //valueSum = valueSum + value;
       // console.log(valueSum);
    });
};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('sala2', data);
});

//testar direcionamento das url's por exemplo http://127.0.0.1:9092/test
//enviar e receber atraves do kafka, via python e javascript
//criar um projeto de exemplo.

//kafka-topics --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic sala

//sudo kafka-console-consumer --zookeeper zookeeper:2181 --topic testing --from-beginning

//sudo kafka-console-producer --broker-list localhost:9092 --topic testing