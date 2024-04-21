require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('./models/user');
const cors = require('cors'); 
const app = express();
const port = process.env.PORT || 5000;
const uri = process.env.MONGODB_URI;
const secret = process.env.JWT_SECRET;
const Razorpay = require('razorpay');
const nodemailer = require('nodemailer');




mongoose.connect(uri)
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

  app.use(express.json());
  app.use(cors());

  app.get('/', (req, res) => {
    res.send('Hello World!');
  });
  app.post('/signup', async (req, res) => {
    const { name, email, password } = req.body;
  
    try {
      // Check if user already exists
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).send('User already exists');
      }
  
      // Hash password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
      const googleId = `traditional_${Date.now()}`;
  
      // Create a new user and save to database
      const user = new User({
        name,
        email,
        password: hashedPassword,
        googleId
      });
  
      await user.save();
  
      res.status(201).send('User created successfully');
    } catch (error) {
      console.error('Signup error:', error);
      res.status(500).send('Server error');
    }
  });
  app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    try {
      // Find the user by email
      const user = await User.findOne({ email });
      if (!user) {
        return res.status(404).send('User not found');
      }
  
      // Compare the submitted password with the one in the database
      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) {
        return res.status(400).send('Invalid credentials');
      }
  
      // Generate a token
      const token = jwt.sign(
        { userId: user._id },
        secret,
        { expiresIn: '1h' } // Token expires in 1 hour
      );
  
      res.status(200).json({ token,name: user.name });
    } catch (error) {
      console.error('Login error:', error);
      res.status(500).send('Server error');
    }
  });

  app.get('/api/products/:influencerName', (req, res) => {
    const { influencerName } = req.params;
    // Fetch products related to influencerName from your database
    res.json([
      { name: "Product 1", description: "Description 1", price: 100, imageUrl: "path/to/image1.jpg" },
      { name: "Product 2", description: "Description 2", price: 150, imageUrl: "path/to/image2.jpg" },
    ]);
  });

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_KEY_ID,
    key_secret: process.env.RAZORPAY_KEY_SECRET
  });
  
  app.post('/orders', async (req, res) => {
    try {
      const options = {
        amount: req.body.amount, // amount in the smallest currency unit
        currency: "INR",
        receipt: "receipt#1"
      };
      const order = await razorpay.orders.create(options);
      res.json(order);
    } catch (error) {
      console.error('Error:', error);
      res.status(500).send('Unable to create order. Please try again.');
    }
  });

  const transporter = nodemailer.createTransport({
    service: 'gmail', // Use Gmail's service
    auth: {
      user: process.env.EMAIL_USERNAME, // Your email
      pass: process.env.EMAIL_PASSWORD, // Your email password
    },
  });

  app.post('/send-confirmation-email', async (req, res) => {
    const { email, itemsOrdered, totalAmount } = req.body;
  
    const mailOptions = {
      from: process.env.EMAIL_USERNAME, // Sender address
      to: email, // List of receivers
      subject: 'Order Confirmation', // Subject line
      text: `Thank you for your order:\n\n${itemsOrdered.map(item => `${item.quantity}x ${item.name} at Rs.${item.price}`).join('\n')}\n\nTotal Amount: Rs.${totalAmount}`, // Plain text body
    };
  
    try {
      await transporter.sendMail(mailOptions);
      res.json({ message: 'Confirmation email sent.' });
    } catch (error) {
      console.error('Error sending email:', error);
      res.status(500).json({ error: 'Error sending confirmation email' });
    }
  });
  

  

  
  
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

