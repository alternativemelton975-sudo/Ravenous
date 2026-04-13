import Business from './Business'
import styles from './BusinessList.module.css'

function BusinessList({ businesses }) {
  return (
    <div className={styles.businessList}>
      {businesses.map((business, index) => (
        <Business key={index} business={business} />
      ))}
    </div>
  )
}

export default BusinessList