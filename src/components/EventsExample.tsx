import React, {FC, useState, useRef} from 'react'

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>('')
  const [isDrag, setIsDrag] = useState<boolean>(false)

  const inputRef = useRef<HTMLInputElement>(null)

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log(`sends, ${value} from input managed with handler`);
    console.log(`sends, ${inputRef.current?.value} from input managed with useRef`);

    
  }

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log('drag');
  }

  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    setIsDrag(true)
  }

  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };

  return (
    <>
    <div style={{marginTop: "3em"}}>
      <input type="text" value={value} onChange={changeHandler} placeholder="manage with handler"/>
      <input type="text" ref={inputRef} placeholder="manage with useRef"/>
      <button type="submit" onClick={clickHandler}>Send</button>
    </div>
    <h4>Drag and Drop</h4>
    <div style={{marginTop: "3em"}}>
      <div onDrag={dragHandler} draggable style={{width: 200, height: 200, background: 'grey'}}>drag me</div>
      <div 
      onDrop={dropHandler}
      onDragLeave={leaveHandler}
      onDragOver={dragWithPreventHandler}
      style={{width: 200, height: 200, background:
      isDrag ? 'green':'grey', marginTop: '1em'}}></div>
    </div>
    
    </>
  )
}

export default EventsExample
