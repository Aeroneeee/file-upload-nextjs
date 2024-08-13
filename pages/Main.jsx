import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import styles from '../styles/Home.module.css';
import Preview from './Preview';

function Main() {
  const [files, setFiles] = useState([]);
  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      'image/*': [],
      type: 'file',
    },
    onDrop: async (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const submit = async () => {
      // Append all files to FormData
      const formData = new FormData();
      files.forEach((file) => {
        formData.append('file', file);
      });

      // Upload to firestore
      try {
        const response = await fetch('/api/file-upload', {
          method: 'POST',
          body: formData,
        });

        if (!response.ok) {
          throw new Error('File upload failed');
        }

        const result = await response.json();
        console.log(result.message); // Handle success
      } catch (error) {
        console.error('Upload error:', error);
      }
  }

  useEffect(() => {
    // Make sure to revoke the data uris to avoid memory leaks, will run on unmount
    return () => files.forEach((file) => URL.revokeObjectURL(file.preview));
  }, []);

  return (
    <main className={styles.main}>
      <h1 className={styles.title}>Hello!</h1>
      <h2 className="mt-2">Upload your files here</h2>

      <div className="container mt-5 mb-3">
        <div
          {...getRootProps({
            className: styles.dropzone,
          })}
        >
          <input {...getInputProps()} />
          <p>Drag 'n' drop some files here, or click to select files</p>
        </div>
        <aside className={styles.thumbContainer}>
          <Preview files={files} />
        </aside>
      </div>

      <button type="button" className="btn btn-secondary" onClick={submit}>
        Submit
      </button>
    </main>
  );
}

export default Main;
