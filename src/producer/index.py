from kafka import KafkaProducer
from kafka import KafkaConsumer
import json
import random
from time import sleep
from datetime import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:9092',
                            value_serializer=lambda v: json.dumps(v).encode('utf-8'))

str = raw_input("Enter your name: ")

value = {
    'str': str
}

future = producer.send('ia', value)

consumer = KafkaConsumer('ia')
for msg in consumer:
    print (msg.value)
    exit()


#result = future.get(timeout=60)

# producer = KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))
# producer.send('fizzbuzz', {'foo': 'bar'})

# Call the producer.send method with a producer-record
#while True:
#    producer.send('sala2', kappa)