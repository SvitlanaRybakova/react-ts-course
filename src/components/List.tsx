import React, {FC} from 'react'

interface ListProps<T>{
  items: T[];
  renderItem: (item: T) => React.ReactNode;
}
// reusful generic component
export default function List<T>(props: ListProps<T>){
  return (
    <div style={{marginTop: "3em"}} >
      {props.items.map(props.renderItem)}
    </div>
  )
}
