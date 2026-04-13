import styles from './Business.module.css'

function Business({ business }) {
  return (
    <div className={styles.business}>
      <div className={styles.businessImage}>
        <img src={business.imageSrc} alt={business.name} />
      </div>
      <div className={styles.businessInfo}>
        <h3>{business.name}</h3>
        <div className={styles.businessAddress}>
          <p>{business.address}</p>
          <p>{business.city}</p>
          <p>{business.state} {business.zipCode}</p>
        </div>
        <div className={styles.businessReviews}>
          <div className={styles.businessRating}>
            <p>{business.category}</p>
            <p>{business.rating} stars</p>
          </div>
          <p>{business.reviewCount} reviews</p>
        </div>
      </div>
    </div>
  )
}

export default Business