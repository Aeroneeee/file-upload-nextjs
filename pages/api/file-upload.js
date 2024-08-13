// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const { getApps, initializeApp } = require('firebase/app');
const { readFileSync } = require('node:fs');
import { getStorage, ref, uploadBytes } from 'firebase/storage';

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

const uploadFileToFirebase = async (filePath, fileName) => {
  if (!getApps().length) {
    initializeApp(firebaseConfig);
  }

  const storage = getStorage();
  const storageRef = ref(storage, `uploads/${fileName}`);
  const fileBuffer = fs.readFileSync(filePath);

  await uploadBytes(storageRef, fileBuffer);
};

export default (req, res) => {
  const firebaseApps = getApps();
  if (!firebaseApps.length) {
    initializeApp(firebaseConfig);
  }

  const form = new formidable.IncomingForm();

  form.uploadDir = path.join(process.cwd(), 'tmp'); // Temporary directory to store files
  form.keepExtensions = true;

  form.parse(req, async (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to parse form data' });
    }

    try {
      const fileArray = Array.isArray(files.file) ? files.file : [files.file]; // Handle multiple files

      for (const file of fileArray) {
        await uploadFileToFirebase(file.filepath, file.originalFilename);
        fs.unlinkSync(file.filepath); // Clean up temporary file
      }

      return res.status(200).json({ message: 'Files uploaded successfully' });
    } catch (uploadErr) {
      return res.status(500).json({ error: 'Failed to upload files' });
    }
  });
};
