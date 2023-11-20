spriteList = [];

const round = Math.round;
const pi = Math.PI;
const rad = Math.PI / 180;

const [sin, cos] = [Math.sin, Math.cos];

const rand = (a,b)=>{
    return (Math.floor(Math.random() * (b - a)) + a);
}

const canvas = document.getElementById("game");

const ctx = canvas.getContext("2d");

let mike = new MouseSprite(250,250);
mike.init();

let cheese = new CheeseSprite(100, 100);
cheese.init();

const update = ()=>{
    ctx.clearRect(0,0,500,500);
    spriteList.forEach(a => a.render());
    setTimeout(update, 1000/30);
}

const updateGOAP = ()=>{
    spriteList.forEach(a => a.update());
}

update();

//Update the score table to reflect Mike's priority list every second.

setInterval(()=>{
    let temp = `<tr>
            <th>Goal</th>
            <th>Score</th>
        </tr>`;
    mike.goals.forEach(a=>{
        temp += `
            <tr>
                <td>${a.getName()}</td>
                <td>${a.getScore(mike)}</td>
            </tr>
        `;
    });
    document.getElementById("goals").innerHTML = temp;
}, 1000);

const setVal = a => {
    mike[a] = Number(document.getElementById(a).value);
    Goal.sortList(mike);
}
// setTimeout(updateGOAP, 1000 + Math.floor(Math.random() * 1000));Plan.register([
    


