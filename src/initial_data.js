const initialData = {
    tasks: {
        'task-1': { id: 'task-1', content: "First task" },
        'task-2': { id: 'task-2', content: "Second task" },
        'task-3': { id: 'task-3', content: "Third task" },
        'task-4': { id: 'task-4', content: "Fourth task" },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Sin comenzar',
            taskIds: ['task-1', 'task-2', 'task-3', 'task-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'En proceso',
            taskIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'En revision',
            taskIds: []
        }
    },
    columnsOrder: ['column-1', 'column-2', 'column-3'],
}

export default initialData
