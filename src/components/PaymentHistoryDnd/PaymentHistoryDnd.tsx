import cx from 'clsx';
import { Avatar, Text } from '@mantine/core';
import { useListState } from '@mantine/hooks';
import { DragDropContext, Droppable, Draggable } from '@hello-pangea/dnd';
import classes from './PaymentHistoryDnd.module.css';
import { IconCalendar, IconCheck, IconClock } from '@tabler/icons-react';

const data = [
  { position: "04/06/2022", mass: "12:00 PM", symbol: <IconCheck />, name: 'Curso de Word' },
  { position: "08/06/2022", mass: "01:00 PM", symbol: <IconCheck />, name: 'Curso de Powerpoint' },
  { position: "08/07/2022", mass: "10:00 AM", symbol: <IconCheck />, name: 'Curso de Excel' },
];

export function PaymentHistoryDnd() {
  const [state, handlers] = useListState(data);

  const items = state.map((item, index) => (
    <Draggable key={item.name} index={index} draggableId={item.name}>
      {(provided: any, snapshot: any) => (
        <div
          className={cx(classes.item, { [classes.itemDragging]: snapshot.isDragging })}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          <Avatar className={classes.symbol}>{item.symbol}</Avatar>
          <div>
            <Text>{item.name}</Text>
            <Text c="dimmed" size="sm">
              <IconCalendar size='1rem' className={classes.icon} /> {item.position} • <IconClock size='1rem' className={classes.icon} />  {item.mass}
            </Text>
          </div>
        </div>
      )}
    </Draggable>
  ));

  return (
    <DragDropContext
      onDragEnd={({ destination, source }: { destination: any, source: any }) =>
        handlers.reorder({ from: source.index, to: destination?.index || 0 })
      }
    >
      <Droppable droppableId="dnd-list" direction="vertical">
        {(provided: any) => (
          <div {...provided.droppableProps} ref={provided.innerRef}>
            {items}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
}