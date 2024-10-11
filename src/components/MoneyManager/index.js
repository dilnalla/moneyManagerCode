import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import MoneyDetails from '../MoneyDetails'
import TransactionItem from '../TransactionItem'
import './index.css'

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
    transactionHistoryList: [],
    inputTitleValue: '',
    inputAmountValue: '',
    inputTypeValue: 'Income',
  }

  onDeleteTransactionItem = id => {
    this.setState(prevState => ({
      transactionHistoryList: prevState.transactionHistoryList.filter(
        eachItem => eachItem.uniqueId !== id,
      ),
    }))
  }

  onChangeTitle = event => {
    this.setState({inputTitleValue: event.target.value})
  }

  onChangeAmount = event => {
    this.setState({inputAmountValue: event.target.value})
  }

  onChangeType = event => {
    this.setState({inputTypeValue: event.target.value})
  }

  onSubmitForm = event => {
    event.preventDefault()
    const {
      inputTitleValue,
      inputAmountValue,
      inputTypeValue,
      transactionHistoryList,
    } = this.state
    const transactionObj = {
      uniqueId: uuidv4(),
      title: inputTitleValue,
      amount: inputAmountValue,
      type: inputTypeValue,
    }
    this.setState({
      transactionHistoryList: [...transactionHistoryList, transactionObj],
      inputTitleValue: '',
      inputAmountValue: '',
      inputTypeValue: 'Income',
    })
  }

  render() {
    const {
      transactionHistoryList,
      inputAmountValue,
      inputTitleValue,
      inputTypeValue,
    } = this.state
    return (
      <div className="bg-container">
        <div className="top-section-container">
          <h1>Hi, Richard</h1>
          <p>
            welcome back to your{' '}
            <span className="span-element">Money Manager</span>
          </p>
        </div>

        <MoneyDetails transactionHistoryList={transactionHistoryList} />

        <div className="form-transaction-items-container">
          <form className="form-element" onSubmit={this.onSubmitForm}>
            <h1>Add Transaction</h1>
            <label htmlFor="titleId" className="label-text">
              TITLE
            </label>
            <input
              placeholder="TITLE"
              type="text"
              id="titleId"
              className="input-element"
              onChange={this.onChangeTitle}
              value={inputTitleValue}
            />
            <label htmlFor="amountId" className="label-text">
              AMOUNT
            </label>
            <input
              placeholder="AMOUNT"
              type="text"
              id="amountId"
              className="input-element"
              onChange={this.onChangeAmount}
              value={inputAmountValue}
            />
            <label htmlFor="typeId" className="label-text">
              TYPE
            </label>
            <select
              id="typeId"
              className="input-element"
              onChange={this.onChangeType}
              value={inputTypeValue}
            >
              {transactionTypeOptions.map(eachItem => (
                <option value={eachItem.displayText} key={eachItem.optionId}>
                  {eachItem.displayText}
                </option>
              ))}
            </select>
            <button type="submit" className="add-button">
              Add
            </button>
          </form>

          <div className="transaction-item-outer-container">
            <h1>History</h1>
            <ul className="contacts-table">
              <li className="table-header">
                <p className="table-header-cell name-column">Title</p>
                <p className="table-header-cell name-column">Amount</p>
                <p className="table-header-cell name-column">Type</p>
              </li>
              {transactionHistoryList.map(eachItem => (
                <TransactionItem
                  transactionDetails={eachItem}
                  key={eachItem.uniqueId}
                  onDeleteTransactionItem={this.onDeleteTransactionItem}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default MoneyManager
