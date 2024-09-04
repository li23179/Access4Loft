import styles from './materialTable.module.css'
import items from '../data/supplies_data'

const materialTable = () => {
  return (
    <div className={styles.table_container}>
      <table>
        <thead>
            <tr className="">
                <th>ID</th>
                <th>Name</th>
                <th>Description</th>
                <th>Quantity</th>
            </tr>
        </thead>
        <tbody>
            {
                items.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.description}</td>
                        <td>{item.quantity}</td>
                    </tr>
                ))
            }
        </tbody>
      </table>
    </div>
  )
}

export default materialTable
