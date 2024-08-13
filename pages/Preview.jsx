import styles from '../styles/Home.module.css';

function Preview({files}) {
  return files.map((file) => (
    <div className={styles.thumb} key={file.name}>
      <div className={styles.thumbInner}>
        <img
          src={file.preview}
          className={styles.img}
          // Revoke data uri after image is loaded
          onLoad={() => {
            URL.revokeObjectURL(file.preview);
          }}
        />
      </div>
    </div>
  ));
}

export default Preview;