const Kafka = require('no-kafka');
const brain = require('brain.js');
const data = require('./data.json');

const producer = new Kafka.Producer();
const network = new brain.recurrent.LSTM();

var cond = '';

const trainingData = data.map(item => ({
    input: item.text,
    output: item.category
  }));
  
network.train(trainingData, {
    iterations: 1000,
    log: true
});

// Create an instance of the Kafka consumer
const consumer = new Kafka.SimpleConsumer({"connectionString":"127.0.0.1:9092"})
var data2 = function (messageSet) {
   messageSet.forEach(function (m) {
        var value = JSON.parse(m.message.value);
        cond = value.str;
        console.log(cond);
        sendProduction(cond);
        //value.map(data => console.log(data.nome));
        //console.log(JSON.stringify(value.idade));
        //console.log(value.idade);
        //valueSum = valueSum + value;
       // console.log(valueSum);
})};

// Subscribe to the Kafka topic
return consumer.init().then(function () {
    return consumer.subscribe('ia', data2);
});

function sendProduction(cond){
    const output = network.run(cond);

    producer.init().then(function(){
    return producer.send({
        topic: 'ia',
        partition: 0,
        message: {
            value: output
        }
    });
    })
    .then(function (result) {
        console.log('Result: '+JSON.stringify(result))
    });
}


//testar direcionamento das url's por exemplo http://127.0.0.1:9092/test
//enviar e receber atraves do kafka, via python e javascript
//criar um projeto de exemplo.

//kafka-topics.sh --create --zookeeper zookeeper:2181 --replication-factor 1 --partitions 1 --topic ia

//sudo kafka-console-consumer --zookeeper zookeeper:2181 --topic testing --from-beginning

//sudo kafka-console-producer --broker-list localhost:9092 --topic testing