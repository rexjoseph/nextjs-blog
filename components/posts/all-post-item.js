import Link from 'next/link'
import Image from 'next/image'
import classes from './all-post-item.module.css'

function PostItem(props) {
  const { author, title, image, excerpt, date, slug, tags } = props.post;

  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
  });

  const imagePath = `/images/posts/${slug}/${image}`;
  const linkPath = `/posts/${slug}`;

  return <li className={classes.li}>
    <Link href={linkPath}>
      <div className={classes.container}>
        <div className={classes.imagewrapper}>
          <Image src={imagePath} 
            alt={title} 
            width={300} 
            height={200} 
            layout="responsive" 
          />
        </div>
        <div className={classes.content}>
          <span className={classes.span}>{author} • <time>{formattedDate}</time></span>
          <h3>{title}</h3>
          <p>{excerpt}</p>
          <div className={classes.flextags}>
            {
              tags.map(tag => (
                <div className={classes.flexdiv}>
                  <div>{tag}</div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </Link>
  </li>
}

export default PostItem;