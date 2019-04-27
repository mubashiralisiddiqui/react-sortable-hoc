import React, { useState } from 'react';
import { } from 'react-sortable-hoc'
import './App.css';
import { SortableContainer, SortableElement, arrayMove } from 'react-sortable-hoc';


const SortableItem = SortableElement(({ value }) => <li style={{cursor:'move'}}>{value}</li>)
const SortableLst = SortableContainer(({ items }) => {
  return (
    <ul>
      {
        items.map((item, index) => {
          return (
            <SortableItem
              value={item}
              index={index}
              key={index}

            />
          )
        })
      }
    </ul>
  )
})
function App() {
  const [list, setlist] = useState([1, 2, 3, 4, 5, 6]);
  const onSortEnd = ({ oldIndex, newIndex }) => {
    setlist(arrayMove(list, oldIndex, newIndex))
  }

  return (
    <SortableLst
      onSortEnd={onSortEnd}
      items={list}
    />
  );
}

export default App;
