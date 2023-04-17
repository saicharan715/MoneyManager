import {Component} from 'react'
import './index.css'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import Transaction from '../TransactionItem'

const transactionTypeOptions = [
  {
    optionId: 'INCOME',
    displayText: 'Income',
  },
  {
    optionId: 'EXPENSES',
    displayText: 'Expenses',
  },
]

class MoneyManager extends Component {
  state = {
    title: '',
    amount: '',
    type: '',
    amountList: [],
    total: 0,
    income: 0,
    expenses: 0,
  }

  submitBtn = event => {
    event.preventDefault()
    const {
      title,
      amount,
      type,
      amountList,
      total,
      income,
      expenses,
    } = this.state
    if (type === '') {
      this.setState(prevState => ({
        total: prevState.total + parseInt(amount),
      }))
      this.setState({income: amount})
    } else {
      this.setState(prevState => ({total: prevState.total - parseInt(amount)}))
      this.setState({expenses: amount})
    }
    const newList = {
      id: uuidv4(),
      title,
      amount,
      type,
    }
    this.setState(prevState => ({
      amountList: [...prevState.amountList, newList],
      title: '',
      amount: '',
      type: '',
    }))
  }

  deletedItem = value => {
    const {amountList, total, income, expenses} = this.state
    const result = amountList.filter(eachItem => eachItem.id !== value)
    const deleteRedult = amountList.filter(itemValue => itemValue.id === value)
    const {amount, type} = deleteRedult[0]
    if (type === '') {
      this.setState({total: parseInt(total) - parseInt(amount), income: 0})
    } else {
      this.setState({total: parseInt(total) + parseInt(amount), expenses: 0})
    }
    this.setState({amountList: result})
  }

  amountValue = event => {
    this.setState({amount: event.target.value})
  }

  titleSalary = event => {
    this.setState({title: event.target.value})
  }

  typeOfIncome = event => {
    this.setState({type: event.target.value})
  }

  render() {
    const {
      amountList,
      amount,
      title,
      type,
      total,
      income,
      expenses,
    } = this.state
    return (
      <form onSubmit={this.submitBtn}>
        <div>
          <div>
            <div className="hi">
              <h1 className="main-head">Hi, richard</h1>
              <p>
                Welcome back to your <span className="span">Money Manager</span>
              </p>
            </div>
            <MoneyDetails expense={expenses} incomes={income} your={total} />
          </div>
          <div className="list-item">
            <div className="add">
              <h1>Add Transaction</h1>
              <label htmlFor="Title">TITLE</label>
              <input
                placeholder="Title"
                value={title}
                onChange={this.titleSalary}
                id="Title"
              />
              <label htmlFor="Amount">AMOUNT</label>
              <input
                placeholder="Amount"
                value={amount}
                onChange={this.amountValue}
                id="Amount"
              />
              <label htmlFor="Type">TYPE</label>
              <select id="Type" value={type} onChange={this.typeOfIncome}>
                <option value={transactionTypeOptions[0].optionId}>
                  {transactionTypeOptions[0].displayText}
                </option>
                <option value={transactionTypeOptions[1].optionId}>
                  {transactionTypeOptions[1].displayText}
                </option>
              </select>
              <button className="btn" type="submit">
                Add
              </button>
            </div>
            <ul className="ul">
              <h1>History</h1>
              <li className="li">
                <p className="para">Title</p>
                <p className="para">Amount</p>
                <p className="para">Type</p>
              </li>
              {amountList.map(each => (
                <Transaction
                  deletedItem={this.deletedItem}
                  key={each.id}
                  send={each}
                />
              ))}
            </ul>
          </div>
        </div>
      </form>
    )
  }
}

export default MoneyManager
