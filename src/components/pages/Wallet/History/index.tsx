import React from "react"
import { ItemContent, Virtuoso } from "react-virtuoso"
import ListItem from "../ListItem"

const HistoryComponent = () => {
  const renderedItem: ItemContent<number, any> = (index) => {
    return <ListItem key={`wallet_${index}`} />
  }

  return (
    <Virtuoso
      className={`scroll_hidden`}
      initialItemCount={20}
      data={[1,1,1,1,1,1,1,1,1,1]}
      components={{
        Header: () => <div style={{ height: 12 }}></div>,
        Footer: () => <div style={{ height: 24 }}></div>
      }}
      // children={<OnGoing />}
      itemContent={renderedItem}
    />
  )
}

export default React.memo(HistoryComponent)