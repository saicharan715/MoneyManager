// Write your code here
import './index.css'

const MoneyDetails = props => {
  const {your, incomes, expense} = props
  return (
    <div className="details">
      <div className="your">
        <img
          className="icon"
          alt="balance"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
        />
        <p>Your Balance</p>
        <p data-testid="balanceAmount">Rs {your}</p>
      </div>
      <div className="your1">
        <img
          className="icon"
          alt="income"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
        />
        <p>Your Income</p>
        <p data-testid="incomeAmount">Rs {incomes}</p>
      </div>
      <div className="your2">
        <img
          className="icon"
          alt="expenses"
          src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
        />
        <p>Your Expenses</p>
        <p data-testid="expensesAmount">Rs {expense}</p>
      </div>
    </div>
  )
}

export default MoneyDetails
