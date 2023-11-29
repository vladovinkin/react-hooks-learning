import { useEffect, useState } from 'react'

type itemsListProps = {
  getItems: () => Array<string>
}

const ItemsList = (props: itemsListProps) => {
  const [items, setItems] = useState<Array<string>>([])

  useEffect(() => {
    const newItems = props.getItems()
    console.log('render')
    setItems(newItems)
  }, [props.getItems])

  return (
    <ul>
      {items.map((i) => (
        <li key={i}>{i}</li>
      ))}
    </ul>
  )
}

export default ItemsList
