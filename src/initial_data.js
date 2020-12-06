const initialData = {
    sub_tasks: {
        'subTask-1': { id: 'subTask-1', content: "First sub-task" },
        'subTask-2': { id: 'subTask-2', content: "Second sub-task" },
        'subTask-3': { id: 'subTask-3', content: "Third sub-task" },
        'subTask-4': { id: 'subTask-4', content: "Fourth sub-task" },
        'subTask-5': { id: 'subTask-5', content: "Fifth sub-task" },
    },
    tasks: {
        'task-1': { id: 'task-1', content: "Consumir el API" },
        'task-2': { id: 'task-2', content: "Refactorizar el código" },
        'task-3': { id: 'task-3', content: "Third task" },
        'task-4': { id: 'task-4', content: "Que..." },
        'task-5': { id: 'task-5', content: "...laaacreeeeooooo" },
        'task-6': { id: 'task-6', content: "Crear funcionalidad en las vistas" },
        'task-7': { id: 'task-7', content: "Modal en el tablero" },
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'Sin comenzar',
            taskIds: ['task-1', 'task-3']
        },
        'column-2': {
            id: 'column-2',
            title: 'En proceso',
            taskIds: ['task-4', 'task-5']
        },
        'column-3': {
            id: 'column-3',
            title: 'En revision',
            taskIds: []
        },
        'column-4': {
            id: 'column-4',
            title: 'Aprobados',
            taskIds: ['task-7']
        },
        'column-5': {
            id: 'column-5',
            title: '1.4.9',
            taskIds: ['task-6']
        }
    },
    columnsOrder: ['column-1', 'column-2', 'column-3', 'column-4', 'column-5'],
}

export default initialData
