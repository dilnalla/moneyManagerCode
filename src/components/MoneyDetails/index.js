import {Component} from 'react'
import './index.css'

class MoneyDetails extends Component {
  render() {
    const {transactionHistoryList} = this.props
    const totalIncome = transactionHistoryList
      .filter(eachItem => eachItem.type === 'Income')
      .reduce((sum, item) => sum + parseInt(item.amount), 0)

    const totalExpenses = transactionHistoryList
      .filter(eachItem => eachItem.type === 'Expenses')
      .reduce((sum, item) => sum + parseInt(item.amount), 0)

    const totalBalance = totalIncome - totalExpenses

    return (
      <div className="money-details-container">
        <div className="money-details-container-item container-one">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/balance-image.png"
            alt="balance"
            className="logo-image"
          />
          <div>
            <p>Your Balance</p>
            <p data-testid="balanceAmount">Rs {totalBalance}</p>
          </div>
        </div>

        <div className="money-details-container-item container-two">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/income-image.png"
            alt="income"
            className="logo-image"
          />
          <div>
            <p>Your Income</p>
            <p data-testid="incomeAmount">Rs {totalIncome}</p>
          </div>
        </div>

        <div className="money-details-container-item container-three">
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/expenses-image.png"
            alt="expenses"
            className="logo-image"
          />
          <div>
            <p>Your Expenses</p>
            <p data-testid="expensesAmount">Rs {totalExpenses}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyDetails
