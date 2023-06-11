const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { MongoClient, ObjectId } = require('mongodb');
const path = require('path');

const mongoHost = process.env.MONGO_IP || 'localhost';
const mongoPort = process.env.MONGO_PORT || '27017';
const mongoUrl = `mongodb://${mongoHost}:${mongoPort}`;
const dbName = 'audioWidgetDB';
const collectionName = 'audioItems';

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Connect to MongoDB
MongoClient.connect(mongoUrl, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to MongoDB');

    const db = client.db(dbName);
    const collection = db.collection(collectionName);

    // API route for adding an audio item
    app.post('/api/audio', (req, res) => {
      const { name, url, service, color, fanart } = req.body;
      const audioItem = { name, url, service, color, fanart };

      collection.insertOne(audioItem)
        .then(result => {
          res.sendStatus(200);
        })
        .catch(error => {
          res.status(500).send('Error adding audio item');
        });
    });

    // API route for retrieving all audio items
    app.get('/api/audio', (req, res) => {
      collection.find().toArray()
        .then(items => {
          res.json(items);
        })
        .catch(error => {
          res.status(500).send('Error retrieving audio items');
        });
    });

    // API route for deleting an audio item
    app.delete('/api/audio/:id', (req, res) => {
      const itemId = req.params.id;

      collection.deleteOne({ _id: new ObjectId(itemId) }) // Use new ObjectId(itemId)
        .then(result => {
          if (result.deletedCount === 1) {
            res.sendStatus(200);
          } else {
            res.status(404).send('Audio item not found');
          }
        })
        .catch(error => {
          res.status(500).send('Error deleting audio item');
        });
    });

    // Start the server
    app.listen(3000, () => {
      console.log('Server is running on port 3000');
    });
  })
  .catch(error => {
    console.log('Error connecting to MongoDB', error);
  });
