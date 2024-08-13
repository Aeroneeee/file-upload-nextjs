// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { getApps, initializeApp } = require('firebase/app');
const { getStorage, ref, uploadBytes} = require('firebase/storage');
const { IncomingForm } = require('formidable');
const { readFileSync } = require('node:fs');
const path = require('path');

const firebaseConfig = {
  apiKey: process.env.API_KEY,
  authDomain: process.env.AUTH_DOMAIN,
  projectId: process.env.PROJECT_ID,
  storageBucket: process.env.STORAGE_BUCKET,
  messagingSenderId: process.env.SENDER_ID,
  appId: process.env.APP_ID,
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const firebaseApps = getApps();
  if (!firebaseApps.length) {
    initializeApp(firebaseConfig);
  }

  const form = new IncomingForm();
  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse the form.' });
    }

    const file = files?.file && files.file.length && files?.file[0];
    if (!file) {
      return res.status(400).json({ error: 'No file uploaded.' });
    }

    try {
      const storage = getStorage();
      const fileUploadRef = ref(storage, `images/${path.basename(file.filepath)}`);
      const fileBuffer = readFileSync(file.filepath);
      await uploadBytes(fileUploadRef, fileBuffer);
      
      res.status(200).json({ message: 'File uploaded successfully!' });
    } catch (uploadError) {
      console.error('Upload Error: ', uploadError);
      res.status(500).json({ error: 'Failed to upload the file.' });
    }
  });
};