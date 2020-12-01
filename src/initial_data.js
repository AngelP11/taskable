const initialData = {
    sub_tasks: {
        'subTask-1': { id: 'subTask-1', content: "First sub-task" },
        'subTask-2': { id: 'subTask-2', content: "Second sub-task" },
        'subTask-3': { id: 'subTask-3', content: "Third sub-task" },
        'subTask-4': { id: 'subTask-4', content: "Fourth sub-task" },
        'subTask-5': { id: 'subTask-5', content: "Fifth sub-task" },
    },
    tasks: {
        'task-1': {
            id: 'task-1',
            content: "First task",
            persons: ['fulanito', 'menganito'],
			progress: 68,
			timeLeft: true,
			priority: 'Alta',
			tag: null
        },
        'task-2': {
            id: 'task-2',
            content: "Second task",
            persons: ['fulanito', 'menganito'],
			progress: 68,
			timeLeft: true,
			priority: 'Alta',
			tag: null
        },
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
        },
        'column-4': {
            id: 'column-4',
            title: 'Terminado',
            taskIds: []
        }
    },
    columnsOrder: ['column-1', 'column-2', 'column-3', 'column-4'],
}

export default initialData
