from kafka import KafkaProducer
import json
import random
from time import sleep
from datetime import datetime

# Create an instance of the Kafka producer
producer = KafkaProducer(bootstrap_servers='localhost:9092',
                            value_serializer=lambda v: json.dumps(v).encode('utf-8'))

# producer = KafkaProducer(value_serializer=lambda v: json.dumps(v).encode('utf-8'))
# producer.send('fizzbuzz', {'foo': 'bar'})

# Call the producer.send method with a producer-record
producer.send('sala2', {'sadas': 'bar'})