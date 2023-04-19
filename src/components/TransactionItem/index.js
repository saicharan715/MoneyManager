// Write your code here
import './index.css'

const Transaction = props => {
  const {send, deletedItem} = props
  const {id, type, title, amount} = send
  const type1 = type === 'EXPENSES' ? 'Expenses' : 'Income'

  const clickChange = () => {
    deletedItem(id)
  }
  return (
    <li className="list">
      <p className="para1">{title}</p>
      <p className="para1">Rs {amount}</p>
      <p className="para1">{type1}</p>
      <button data-testid="delete" type="button" onClick={clickChange}>
        <img
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
        />
      </button>
    </li>
  )
}

export default Transaction
