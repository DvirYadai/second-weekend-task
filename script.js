
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

        tasksFinished: 5,

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

        tasksGiven: 6,

        tasksFinished: 1,

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

// Adding table.

const table = document.createElement('table');
const tableRow = document.createElement('tr');

table.appendChild(tableRow);
document.body.appendChild(table);

const tableHead1 = document.createElement('th');
tableHead1.textContent = 'Started at';
tableRow.append(tableHead1);
const tableHead2 = document.createElement('th');
tableHead2.textContent = 'Finished at';
tableRow.append(tableHead2);
const tableHead3 = document.createElement('th');
tableHead3.textContent = 'Total Time Spent';
tableRow.append(tableHead3);
const tableHead4 = document.createElement('th');
tableHead4.textContent = 'Tasks given';
tableRow.append(tableHead4);
const tableHead5 = document.createElement('th');
tableHead5.textContent = 'Tasks Finished';
tableRow.append(tableHead5);
const tableHead6 = document.createElement('th');
tableHead6.textContent = 'Tasks Finished %';
tableRow.append(tableHead6);
const tableHead7 = document.createElement('th');
tableHead7.textContent = 'Topic';
tableRow.append(tableHead7);


for (const object of toDoList) {
    const newTableRow = document.createElement('tr');
    table.appendChild(newTableRow);

    const newTdStartTime = document.createElement('td');
    newTdStartTime.textContent = object.startedAt.getMinutes() > 0 ? object.startedAt.getHours() + ':' + object.startedAt.getMinutes() : object.startedAt.getHours() + ':' + object.startedAt.getMinutes() + 0;
    newTableRow.appendChild(newTdStartTime);

    const newTdFinishedTime = document.createElement('td');
    newTdFinishedTime.textContent = object.finishedAt.getMinutes() > 0 ? object.finishedAt.getHours() + ':' + object.finishedAt.getMinutes() : object.finishedAt.getHours() + ':' + object.finishedAt.getMinutes() + 0;
    newTableRow.appendChild(newTdFinishedTime);

    const newTdTotalTime = document.createElement('td');
    newTdTotalTime.textContent = object.totaltime;
    newTableRow.appendChild(newTdTotalTime);
    
    if(object.totaltime <= 2){
        newTdTotalTime.classList.add("color-green");
    } else if(object.totaltime > 2 && object.totaltime <= 5){
        newTdTotalTime.classList.add("color-orange");
    } else newTdTotalTime.classList.add("color-red");

    const newTdTasksGiven = document.createElement('td');
    newTdTasksGiven.textContent = object.tasksGiven;
    newTableRow.appendChild(newTdTasksGiven);

    const newTdTasksFinished = document.createElement('td');
    newTdTasksFinished.textContent = object.tasksFinished;
    newTableRow.appendChild(newTdTasksFinished);

    const newTdTasksFinishedPercent = document.createElement('td');
    newTdTasksFinishedPercent.textContent = object.tasksFinishedPrecent + '%';
    newTableRow.appendChild(newTdTasksFinishedPercent);

    if(object.tasksFinishedPrecent <= 50){
        newTdTasksFinishedPercent.classList.add("color-light-blue");
    } else if(object.tasksFinishedPrecent > 50 && object.tasksFinishedPrecent <= 75){
        newTdTasksFinishedPercent.classList.add("color-blue");
    } else newTdTasksFinishedPercent.classList.add("color-deep-blue");

    const newTdTopic = document.createElement('td');
    newTdTopic.textContent = object.topic;
    newTableRow.appendChild(newTdTopic);
}




// Old solution below.

// document.write(`
// <table>
//     <tr>
//         <th>Started at</th>
//         <th>Finished at</th>
//         <th>Total Time Spent</th>
//         <th>Tasks given</th>
//         <th>Tasks Finished</th>
//         <th>Tasks Finished %</th>
//         <th>Topic</th>
//     </tr>`)

// for (const object of toDoList) {
//     document.write(`
//     <tr>
//         <td>
//         ${object.startedAt.getMinutes() > 0 ? object.startedAt.getHours() + ':' + object.startedAt.getMinutes() : object.startedAt.getHours() + ':' + object.startedAt.getMinutes() + 0}
//         </td>
//         <td>
//         ${object.finishedAt.getMinutes() > 0 ? object.finishedAt.getHours() + ':' + object.finishedAt.getMinutes() : object.finishedAt.getHours() + ':' + object.finishedAt.getMinutes() + 0}
//         </td>`)
//     if(object.totaltime <= 2){
//         document.write(`<td class = "color-green">${object.totaltime}</td>`)
//     } else if(object.totaltime > 2 && object.totaltime <= 5){
//         document.write(`<td class = "color-orange">${object.totaltime}</td>`)
//     } else document.write(`<td class = "color-red">${object.totaltime}</td>`)
//     document.write(`
//         <td>${object.tasksGiven}</td>
//         <td>${object.tasksFinished}</td>`)
//     if(object.tasksFinishedPrecent <= 50){
//         document.write(`<td class = "color-light-blue">${object.tasksFinishedPrecent}</td>`)
//     } else if(object.tasksFinishedPrecent > 50 && object.tasksFinishedPrecent <= 75){
//         document.write(`<td class = "color-blue">${object.tasksFinishedPrecent}</td>`)
//     } else document.write(`<td class = "color-deep-blue">${object.tasksFinishedPrecent}</td>`)
//     document.write(`<td>${object.topic}</td></tr>`)
// }
// document.write(`</table>`)



// Below is my first solution! 

/*<tr>
<td>${toDoList[0].startedAt.getHours() + ':' + toDoList[0].startedAt.getMinutes() + 0}</td>
<td>${toDoList[0].finishedAt.getHours() + ':' + toDoList[0].finishedAt.getMinutes() + 0}</td>
<td class = "color-red">${toDoList[0].totaltime}</td>
<td>${toDoList[0].tasksGiven}</td>
<td>${toDoList[0].tasksFinished}</td>
<td class = "color-blue">${toDoList[0].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[0].topic}</td>
</tr>
<tr>
<td>${toDoList[1].startedAt.getHours() + ':' + toDoList[1].startedAt.getMinutes() + 0}</td>
<td>${toDoList[1].finishedAt.getHours() + ':' + toDoList[1].finishedAt.getMinutes() + 0}</td>
<td class = "color-orange">${toDoList[1].totaltime}</td>
<td>${toDoList[1].tasksGiven}</td>
<td>${toDoList[1].tasksFinished}</td>
<td class = "color-deep-blue">${toDoList[1].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[1].topic}</td>
</tr>
<tr>
<td>${toDoList[2].startedAt.getHours() + ':' + toDoList[2].startedAt.getMinutes() + 0}</td>
<td>${toDoList[2].finishedAt.getHours() + ':' + toDoList[2].finishedAt.getMinutes() + 0}</td>
<td class = "color-orange">${toDoList[2].totaltime}</td>
<td>${toDoList[2].tasksGiven}</td>
<td>${toDoList[2].tasksFinished}</td>
<td class = "color-deep-blue">${toDoList[2].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[2].topic}</td>
</tr>
<tr>
<td>${toDoList[3].startedAt.getHours() + ':' + toDoList[3].startedAt.getMinutes() + 0}</td>
<td>${toDoList[3].finishedAt.getHours() + ':' + toDoList[3].finishedAt.getMinutes() + 0}</td>
<td class = "color-green">${toDoList[3].totaltime}</td>
<td>${toDoList[3].tasksGiven}</td>
<td>${toDoList[3].tasksFinished}</td>
<td class = "color-blue">${toDoList[3].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[3].topic}</td>
</tr>
<tr>
<td>${0 + toDoList[4].startedAt.getHours() + ':' + toDoList[4].startedAt.getMinutes() + 0}</td>
<td>${toDoList[4].finishedAt.getHours() + ':' + toDoList[4].finishedAt.getMinutes() + 0}</td>
<td class = "color-green">${toDoList[4].totaltime}</td>
<td>${toDoList[4].tasksGiven}</td>
<td>${toDoList[4].tasksFinished}</td>
<td class = "color-blue">${toDoList[4].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[4].topic}</td>
</tr>
<tr>
<td>${toDoList[5].startedAt.getHours() + ':' + toDoList[5].startedAt.getMinutes()}</td>
<td>${toDoList[5].finishedAt.getHours() + ':' + toDoList[5].finishedAt.getMinutes() + 0}</td>
<td class = "color-orange">${toDoList[5].totaltime}</td>
<td>${toDoList[5].tasksGiven}</td>
<td>${toDoList[5].tasksFinished}</td>
<td class = "color-light-blue">${toDoList[5].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[5].topic}</td>
</tr>
<tr>
<td>${toDoList[6].startedAt.getHours() + ':' + toDoList[6].startedAt.getMinutes() + 0}</td>
<td>${toDoList[6].finishedAt.getHours() + ':' + toDoList[6].finishedAt.getMinutes()}</td>
<td class = "color-orange">${toDoList[6].totaltime}</td>
<td>${toDoList[6].tasksGiven}</td>
<td>${toDoList[6].tasksFinished}</td>
<td class = "color-blue">${toDoList[6].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[6].topic}</td>
</tr>
<tr>
<td>${toDoList[7].startedAt.getHours() + ':' + toDoList[7].startedAt.getMinutes() + 0}</td>
<td>${toDoList[7].finishedAt.getHours() + ':' + toDoList[7].finishedAt.getMinutes() + 0}</td>
<td class = "color-orange">${toDoList[7].totaltime}</td>
<td>${toDoList[7].tasksGiven}</td>
<td>${toDoList[7].tasksFinished}</td>
<td class = "color-deep-blue">${toDoList[7].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[7].topic}</td>
</tr>
<tr>
<td>${toDoList[8].startedAt.getHours() + ':' + toDoList[8].startedAt.getMinutes() + 0}</td>
<td>${toDoList[8].finishedAt.getHours() + ':' + toDoList[8].finishedAt.getMinutes()}</td>
<td class = "color-orange">${toDoList[8].totaltime}</td>
<td>${toDoList[8].tasksGiven}</td>
<td>${toDoList[8].tasksFinished}</td>
<td class = "color-deep-blue">${toDoList[8].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[8].topic}</td>
</tr>
<tr>
<td>${toDoList[9].startedAt.getHours() + ':' + toDoList[9].startedAt.getMinutes() + 0}</td>
<td>${toDoList[9].finishedAt.getHours() + ':' + toDoList[9].finishedAt.getMinutes()}</td>
<td class = "color-orange">${toDoList[9].totaltime}</td>
<td>${toDoList[9].tasksGiven}</td>
<td>${toDoList[9].tasksFinished}</td>
<td class = "color-light-blue">${toDoList[9].tasksFinishedPrecent + '%'}</td>
<td>${toDoList[9].topic}</td>
</tr> */

