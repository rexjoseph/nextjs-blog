import Image from 'next/image';
import classes from './post-header.module.css';

function PostHeader(props) {
  const { title, image } = props;

  return <header className={classes.header}>
    <h1 className={classes.title}>{title}</h1>
    <div className={classes.imagediv}>
      <Image src={image} alt={title} width={200} height={150} />
    </div>
  </header>
}

export default PostHeader;