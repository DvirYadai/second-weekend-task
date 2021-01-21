
// Array with 10 objects.

const toDoList = [
    {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:19:00"),

        tasksGiven: 10,

        tasksFinished: 7,

        topic: 'HTML'
    },
    {
        startedAt: new Date("2021-01-20:15:00"),

        finishedAt: new Date("2021-01-20:18:00"),

        tasksGiven: 5,

        tasksFinished: 4,

        topic: 'JavaScript'
    },
    {
        startedAt: new Date("2021-01-20:14:00"),

        finishedAt: new Date("2021-01-20:18:00"),

        tasksGiven: 6,

        tasksFinished: 6,

        topic: 'CSS'
    },
    {
        startedAt: new Date("2021-01-20:10:00"),

        finishedAt: new Date("2021-01-20:12:00"),

        tasksGiven: 4,

        tasksFinished: 3,

        topic: 'Arrays'
    },
    {
        startedAt: new Date("2021-01-20:09:00"),

        finishedAt: new Date("2021-01-20:10:00"),

        tasksGiven: 7,

        tasksFinished: 5,

        topic: 'loops'
    },
    {
        startedAt: new Date("2021-01-20:12:30"),

        finishedAt: new Date("2021-01-20:17:00"),

        tasksGiven: 12,

        tasksFinished: 11,

        topic: 'Functions'
    },
    {
        startedAt: new Date("2021-01-20:11:00"),

        finishedAt: new Date("2021-01-20:15:30"),

        tasksGiven: 15,

        tasksFinished: 10,

        topic: 'Objects'
    },
    {
        startedAt: new Date("2021-01-20:13:00"),

        finishedAt: new Date("2021-01-20:16:00"),

        tasksGiven: 15,

        tasksFinished: 13,

        topic: 'Strings'
    },
    {
        startedAt: new Date("2021-01-20:15:00"),

        finishedAt: new Date("2021-01-20:17:30"),

        tasksGiven: 16,

        tasksFinished: 16,

        topic: 'Variables'
    },
    {
        startedAt: new Date("2021-01-20:17:00"),

        finishedAt: new Date("2021-01-20:20:30"),

        tasksGiven: 4,

        tasksFinished: 3,

        topic: 'Classes'
    },
]


// Adding 2 more properties to each object.

for (const object of toDoList) {
    if((object.startedAt.getMinutes() === 0 && object.finishedAt.getMinutes() === 0) || (object.startedAt.getMinutes() === 30 && object.finishedAt.getMinutes() === 30)){
        object.totaltime = object.finishedAt.getHours() - object.startedAt.getHours();
    } else if(object.startedAt.getMinutes() === 30){
        object.totaltime = (object.finishedAt.getHours() - object.startedAt.getHours()) - 0.5;
    } else {
        object.totaltime = (object.finishedAt.getHours() - object.startedAt.getHours()) + 0.5;
    }
}

for (const object of toDoList) {
    object.tasksFinishedPrecent = Math.floor((object.tasksFinished / object.tasksGiven) * 100);
}




