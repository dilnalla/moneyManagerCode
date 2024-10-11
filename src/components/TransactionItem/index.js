import './index.css'

const TransactionItem = props => {
  const {transactionDetails, onDeleteTransactionItem} = props
  const {uniqueId, title, amount, type} = transactionDetails

  const onDeleteItem = () => {
    onDeleteTransactionItem(uniqueId)
  }

  return (
    <li className="table-row">
      <div className="table-cell name-column">
        <p>{title}</p>
      </div>
      <div className="table-cell name-column">
        <p>Rs {amount}</p>
      </div>
      <div className="table-cell mobile-no-column">
        <p className="mobile-no-value">{type}</p>
        <button
          type="button"
          className="favorite-icon-container"
          onClick={onDeleteItem}
          data-testid="delete"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/money-manager/delete.png"
            className="favorite-icon"
            alt="delete"
          />
        </button>
      </div>
    </li>
  )
}

export default TransactionItem
